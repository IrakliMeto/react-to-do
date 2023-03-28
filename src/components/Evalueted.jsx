import { Button } from "./Button";
import "./Evalueted.scss";

export const Evalueted = ({ selectedRate, rateQuantity, onReset }) => {
  return (
    <div className="evalueted">
      <h5 className="evalueted__quantity">
        You selected {selectedRate} out of {rateQuantity}
      </h5>
      <h3 className="evalueted__title">Thank You!</h3>
      <p className="evalueted__text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>

      <Button
        onClick={() => {
          onReset();
        }}
        diffClassName="evalueted__button"
        text={"BACK"}
      />
    </div>
  );
};
