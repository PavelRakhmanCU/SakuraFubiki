import { createContext, useState, useCallback } from "react";

export const GlobalContext = createContext();

/** Six tables total; each shares all seating times (capacity per time window = 6) */
export const RESTAURANT_TABLES = [
  { id: 1, name: "Tatami North" },
  { id: 2, name: "Tatami South" },
  { id: 3, name: "Garden View" },
  { id: 4, name: "Cherry Blossom" },
  { id: 5, name: "Sakura Corner" },
  { id: 6, name: "Zen Alcove" },
];

const STANDARD_TIME_RANGES = [
  "9:00 AM - 10:00 AM",
  "10:15 AM - 11:15 AM",
  "11:30 AM - 12:30 PM",
  "12:45 PM - 1:45 PM",
  "2:00 PM - 3:00 PM",
  "3:15 PM - 4:15 PM",
  "4:30 PM - 5:30 PM",
  "5:45 PM - 6:45 PM",
  "7:00 PM - 8:00 PM",
  "8:15 PM - 9:15 PM",
  "9:30 PM - 10:30 PM",
];

const formatDateKey = (d) => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
};

const isSameCalendarDay = (a, b) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

const parseRangeStartMinutes = (range) => {
  const [startPart] = range.split(" - ");
  const match = startPart.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return 0;
  let h = parseInt(match[1], 10);
  const min = parseInt(match[2], 10);
  const ap = match[3].toUpperCase();
  if (ap === "PM" && h !== 12) h += 12;
  if (ap === "AM" && h === 12) h = 0;
  return h * 60 + min;
};

const filterRangesForToday = (now) => {
  const cur = now.getHours() * 60 + now.getMinutes();
  return STANDARD_TIME_RANGES.filter((r) => parseRangeStartMinutes(r) > cur);
};

const makeSlotId = (dateKey, startTime) => `${dateKey}|${startTime}`;

/** Tables free for this seating time (0–6) */
export const countAvailableTablesInSlot = (slot) =>
  slot?.tables?.filter((t) => t.isAvailable).length ?? 0;

export const isDayBookable = (day) =>
  day?.timeSlots?.some((s) => countAvailableTablesInSlot(s) > 0) ?? false;

const cloneTablesAvailable = () =>
  RESTAURANT_TABLES.map((t) => ({ id: t.id, name: t.name, isAvailable: true }));

const buildSlotsForDay = (date, referenceNow) => {
  const dateKey = formatDateKey(date);
  const today = isSameCalendarDay(date, referenceNow);
  const ranges = today ? filterRangesForToday(referenceNow) : [...STANDARD_TIME_RANGES];

  return ranges.map((startTime) => ({
    slotId: makeSlotId(dateKey, startTime),
    startTime,
    tables: cloneTablesAvailable(),
  }));
};

export function applyReservation(calendar, dateKey, slotId) {
  let assignedTable = null;
  const nextCalendar = calendar.map((day) => {
    if (day.dateKey !== dateKey) return day;
    return {
      ...day,
      timeSlots: day.timeSlots.map((slot) => {
        if (slot.slotId !== slotId) return slot;
        const tables = slot.tables.map((t) => ({ ...t }));
        const idx = tables.findIndex((t) => t.isAvailable);
        if (idx === -1) return slot;
        assignedTable = { id: tables[idx].id, name: tables[idx].name };
        tables[idx] = { ...tables[idx], isAvailable: false };
        return { ...slot, tables };
      }),
    };
  });
  return { nextCalendar, assignedTable };
}

const buildInitialCalendar = () => {
  const referenceNow = new Date();
  const start = new Date(
    referenceNow.getFullYear(),
    referenceNow.getMonth(),
    referenceNow.getDate()
  );
  const endOfNextMonth = new Date(
    referenceNow.getFullYear(),
    referenceNow.getMonth() + 2,
    0
  );

  const days = [];
  for (let d = new Date(start); d <= endOfNextMonth; d.setDate(d.getDate() + 1)) {
    const copy = new Date(d);
    days.push({
      dateKey: formatDateKey(copy),
      date: copy,
      timeSlots: buildSlotsForDay(copy, referenceNow),
    });
  }
  return days;
};

const GlobalContextProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [calendar, setCalendar] = useState(buildInitialCalendar);

  const reserveSlot = useCallback((dateKey, slotId) => {
    let assignedTable = null;
    setCalendar((prev) => {
      const { nextCalendar, assignedTable: a } = applyReservation(prev, dateKey, slotId);
      assignedTable = a;
      return nextCalendar;
    });
    return assignedTable;
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isActive,
        setIsActive,
        calendar,
        setCalendar,
        reserveSlot,
        RESTAURANT_TABLES,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
