import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { IoMenuOutline } from "react-icons/io5";

const ToggleSwitch = () => {
  const { isActive, setIsActive } = useContext(GlobalContext);

  return (
    <button
      type="button"
      className={`toggle-switch ${isActive ? "active" : ""}`}
      onClick={() => setIsActive(!isActive)}
      aria-expanded={isActive}
      aria-controls="main-navigation"
      aria-label={isActive ? "Close menu" : "Open menu"}
    >
      <IoMenuOutline aria-hidden />
    </button>
  );
};

export default ToggleSwitch;
