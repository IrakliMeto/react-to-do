import "./Input.scss";

export const Input = ({ icon, title }) => {
  return (
    <div className="input-holder">
      <label htmlFor="input">{title}</label>
      <div className="input-parent">
        <img src={icon} alt="icon" />
        <input type="number" className="input" />
      </div>
    </div>
  );
};
