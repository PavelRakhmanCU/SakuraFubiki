import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <div className="cta">
      <button type="button" onClick={() => navigate("/reserve")}>
        Make a Reservation
      </button>
    </div>
  );
};

export default CTA