import "./ResultHolder.scss";
import { Button } from "./Button";

export const ResultHolder = ({
  tipOnPerson,
  totalOnPerson,
  onReset,
  isActive,
}) => {
  return (
    <div className="result">
      <div className="result__item">
        <div className="result__text">
          <div className="result__title">
            Tip Amount
            <span>/ Person</span>
          </div>

          <div className="result__bill">{tipOnPerson}$</div>
        </div>

        <div className="result__text">
          <div className="result__title">
            Total Amount
            <span>/ Person</span>
          </div>

          <div className="result__bill">{totalOnPerson}$</div>
        </div>
      </div>

      <Button isActive={isActive} onReset={onReset} />
    </div>
  );
};
