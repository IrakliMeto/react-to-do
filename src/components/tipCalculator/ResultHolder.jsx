import "./ResultHolder.scss";
import { Button } from "./Button";

export const ResultHolder = ({ tipAmount, totalAmount }) => {
  return (
    <div className="result">
      <div className="result__item">
        <div className="result__text">
          <div className="result__title">
            Tip Amount
            <span>/ Person</span>
          </div>

          <div className="result__bill">{tipAmount}$</div>
        </div>

        <div className="result__text">
          <div className="result__title">
            Tip Amount
            <span>/ Person</span>
          </div>

          <div className="result__bill">{totalAmount}$</div>
        </div>
      </div>

      <Button />
    </div>
  );
};
