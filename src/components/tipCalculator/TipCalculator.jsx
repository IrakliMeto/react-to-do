import "./TipCalculator.scss";

import { useState, useEffect } from "react";
import { CalculatorHolder } from "./CalculatorHolder";
import { ResultHolder } from "./ResultHolder";

export const TipCalculator = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [activePercent, setActivePercent] = useState("");
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");

  useEffect(() => {
    // tvale
  }, [activeItem, activePercent, bill, people]);

  const onSelectHandler = (item) => {
    if (item?.id === activeItem?.id) {
      setActiveItem(null);
    } else {
      setActiveItem(item);
      setActivePercent("");
    }
  };

  const customPercenctHandler = (e) => {
    setActivePercent(e.target.value);
    setActiveItem(null);
  };

  return (
    <div className="tip-calculator">
      <CalculatorHolder
        onSelect={onSelectHandler}
        onChange={customPercenctHandler}
        value={activePercent}
        activeItem={activeItem}
      />
      <ResultHolder />
    </div>
  );
};
