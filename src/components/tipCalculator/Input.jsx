import "./Input.scss";

export const Input = ({ icon, title }) => {
  return (
    <div className="input">
      <label className="input__title" htmlFor="input">
        {title}
      </label>
      <div className="input__box">
        <img src={icon} alt="icon" />
        <input type="number" className="input" />
      </div>
    </div>
  );
};
