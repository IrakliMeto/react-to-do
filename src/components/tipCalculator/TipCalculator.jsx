import "./TipCalculator.scss";

import { useState, useEffect } from "react";
import { CalculatorHolder } from "./CalculatorHolder";
import { ResultHolder } from "./ResultHolder";

export const TipCalculator = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [activePercent, setActivePercent] = useState("");
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [tipSum, setTipSum] = useState(0);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    calculateBillOnPerson();
  }, [activeItem, activePercent, bill, people]);

  const onSelectHandler = (item) => {
    if (!bill || !people) return;

    if (item?.id === activeItem?.id) {
      setActiveItem(null);
    } else {
      setActiveItem(item);
      setActivePercent("");
    }
  };

  const customPercenctHandler = (e) => {
    if (!bill || !people) return;

    setActivePercent(e.target.value);
    setActiveItem(null);
  };

  const onChangeBillHandler = (e) => {
    setBill(+e.target.value);
  };

  const onChangePeopleHandler = (e) => {
    setPeople(+e.target.value);
  };

  const calculateBillOnPerson = () => {
    const percent = activeItem?.percent || activePercent;
    const percentInMoney = (bill / 100) * percent;

    if (percent) {
      setTipSum(percentInMoney / people);
      setTotalSum((bill + percentInMoney) / people);
    }
  };

  const onResetHandler = () => {
    setActiveItem(null);
    setActivePercent("");
    setBill("");
    setPeople("");
    setTipSum(0);
    setTotalSum(0);
  };

  return (
    <div className="tip-calculator">
      <CalculatorHolder
        onChangeBill={onChangeBillHandler}
        onChangePeople={onChangePeopleHandler}
        onSelect={onSelectHandler}
        onChange={customPercenctHandler}
        value={activePercent}
        activeItem={activeItem}
        inputValueBill={bill}
        inputValuePeople={people}
      />
      <ResultHolder
        onReset={onResetHandler}
        isActive={tipSum || totalSum}
        tipAmount={tipSum}
        totalAmount={totalSum}
      />
    </div>
  );
};
