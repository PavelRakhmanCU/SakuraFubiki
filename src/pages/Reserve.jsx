import React, { useContext, useMemo, useState } from "react";
import {
  GlobalContext,
  RESTAURANT_TABLES,
  countAvailableTablesInSlot,
  isDayBookable,
} from "../context/GlobalContext";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const groupDaysByMonth = (days) => {
  const groups = [];
  for (const day of days) {
    const d = day.date;
    const label = d.toLocaleString(undefined, { month: "long", year: "numeric" });
    const last = groups[groups.length - 1];
    if (!last || last.label !== label) {
      groups.push({ label, year: d.getFullYear(), month: d.getMonth(), days: [day] });
    } else {
      last.days.push(day);
    }
  }
  return groups;
};

const ReservationPage = () => {
  const { calendar, reserveSlot } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [selectedDateKey, setSelectedDateKey] = useState("");
  const [selectedSlotId, setSelectedSlotId] = useState("");
  const [confirmation, setConfirmation] = useState(null);

  const monthGroups = useMemo(() => groupDaysByMonth(calendar), [calendar]);

  const selectedDay = useMemo(
    () => calendar.find((d) => d.dateKey === selectedDateKey),
    [calendar, selectedDateKey]
  );

  const slotsWithCapacity = useMemo(() => {
    if (!selectedDay) return [];
    return selectedDay.timeSlots.filter((s) => countAvailableTablesInSlot(s) > 0);
  }, [selectedDay]);

  const handleConfirmReservation = (e) => {
    e.preventDefault();
    if (!selectedDateKey || !selectedSlotId || !name.trim() || !contactNumber.trim()) {
      return;
    }
    const slot = selectedDay?.timeSlots.find((s) => s.slotId === selectedSlotId);
    if (!slot || countAvailableTablesInSlot(slot) === 0) return;

    const assignedTable = reserveSlot(selectedDateKey, selectedSlotId);
    if (!assignedTable) return;

    setConfirmation({
      name: name.trim(),
      contactNumber: contactNumber.trim(),
      numberOfPeople: Number(numberOfPeople),
      dateKey: selectedDateKey,
      dateLabel: selectedDay.date.toLocaleDateString(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      startTime: slot.startTime,
      tableName: assignedTable.name,
    });
    setSelectedSlotId("");
  };

  const leadingEmptyCells = (year, monthIndex) => {
    const first = new Date(year, monthIndex, 1).getDay();
    return Array.from({ length: first }, (_, i) => (
      <div key={`pad-${year}-${monthIndex}-${i}`} className="calendar-pad" aria-hidden />
    ));
  };

  const totalTables = RESTAURANT_TABLES.length;

  return (
    <div className="reservation-page reservation-page--wide">
      <h2 className="form-heading">Make a Reservation</h2>
      <p className="reservation-lead">
        Choose a date, then a time. The restaurant has{" "}
        <strong>{totalTables} tables</strong> — for each seating period, up to {totalTables}{" "}
        parties can book (one table per party). Same-day times only appear if they are still in
        the future.
      </p>

      <form className="reservation-form" onSubmit={handleConfirmReservation}>
        <div className="reservation-field-row">
          <label className="reservation-label-block">
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
            />
          </label>
          <label className="reservation-label-block">
            Contact number
            <input
              type="tel"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
              autoComplete="tel"
            />
          </label>
        </div>

        <label className="reservation-label-block">
          Number of guests
          <select
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>

        <p className="reservation-large-party-note">
          For parties of more than six guests, please call us at{" "}
          <a href="tel:+15550100199">(555) 010-0199</a> so we can arrange seating.
        </p>

        <div className="calendar-section" role="region" aria-label="Reservation calendar">
          {monthGroups.map((group) => (
            <div key={group.label} className="calendar-month">
              <h3 className="calendar-month-title">{group.label}</h3>
              <div className="calendar-weekday-row">
                {WEEKDAYS.map((w) => (
                  <span key={w} className="calendar-weekday">
                    {w}
                  </span>
                ))}
              </div>
              <div className="calendar-grid">
                {leadingEmptyCells(group.year, group.month)}
                {group.days.map((day) => {
                  const bookable = isDayBookable(day);
                  const isSelected = day.dateKey === selectedDateKey;
                  return (
                    <button
                      key={day.dateKey}
                      type="button"
                      className={`calendar-day-btn ${
                        bookable ? "calendar-day-btn--available" : "calendar-day-btn--full"
                      } ${isSelected ? "calendar-day-btn--selected" : ""}`}
                      disabled={!bookable}
                      onClick={() => {
                        setSelectedDateKey(day.dateKey);
                        setSelectedSlotId("");
                        setConfirmation(null);
                      }}
                      aria-label={`${day.date.getDate()}, ${
                        bookable ? "available" : "unavailable"
                      }`}
                    >
                      {day.date.getDate()}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {selectedDay && (
          <div className="reservation-day-detail">
            <h3 className="reservation-day-detail-title">
              {selectedDay.date.toLocaleDateString(undefined, {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </h3>
            <p className="reservation-tables-count">
              Only <strong>{totalTables} tables</strong> exist in total — they are shared across all
              seatings. Each time below shows how many of those {totalTables} are still free for{" "}
              <em>that</em> seating only.
            </p>

            {slotsWithCapacity.length === 0 ? (
              <p className="reservation-no-slots">No open tables left for this day.</p>
            ) : (
              <fieldset className="reservation-slots-fieldset">
                <legend className="reservation-slots-legend">Choose a time</legend>
                <p className="reservation-slot-hint">
                  We will assign the next available table for your party.
                </p>
                <div className="reservation-slot-groups">
                  {slotsWithCapacity.map((s) => {
                    const n = countAvailableTablesInSlot(s);
                    return (
                      <label
                        key={s.slotId}
                        className={`reservation-slot-option reservation-slot-option--block ${
                          selectedSlotId === s.slotId ? "reservation-slot-option--on" : ""
                        }`}
                      >
                        <div className="reservation-slot-option-row">
                          <input
                            type="radio"
                            name="slot"
                            value={s.slotId}
                            checked={selectedSlotId === s.slotId}
                            onChange={() => setSelectedSlotId(s.slotId)}
                          />
                          <span className="reservation-slot-option-time">{s.startTime}</span>
                        </div>
                        <span className="reservation-slot-option-meta">
                          {n} of {totalTables} tables free for this seating
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            )}
          </div>
        )}

        <button
          type="submit"
          className="reservation-submit"
          disabled={
            !selectedDateKey || !selectedSlotId || !name.trim() || !contactNumber.trim()
          }
        >
          Confirm reservation
        </button>
      </form>

      {confirmation && (
        <div className="reservation-confirmation" role="status">
          <h3 className="reservation-confirmation-title">Reservation confirmed</h3>
          <p>Thank you, {confirmation.name}. We have held the following for you:</p>
          <ul className="reservation-confirmation-list">
            <li>
              <strong>Date:</strong> {confirmation.dateLabel}
            </li>
            <li>
              <strong>Time:</strong> {confirmation.startTime}
            </li>
            <li>
              <strong>Table:</strong> {confirmation.tableName}
            </li>
            <li>
              <strong>Guests:</strong> {confirmation.numberOfPeople}
            </li>
            <li>
              <strong>Contact:</strong> {confirmation.contactNumber}
            </li>
          </ul>
          <p className="reservation-confirmation-foot">
            A copy of these details has been recorded. We look forward to seeing you.
          </p>
          <button
            type="button"
            className="reservation-confirmation-dismiss"
            onClick={() => setConfirmation(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ReservationPage;
