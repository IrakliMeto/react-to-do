import "./Button.scss";

export const Button = ({ isActive, onReset }) => {
  return (
    <button
      onClick={onReset}
      className={`bill-button ${isActive ? "bill-button--active" : ""}`}
    >
      RESET
    </button>
  );
};
