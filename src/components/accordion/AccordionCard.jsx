import { useState } from "react";
import "./AccordionCard.scss";

export const AccordionCard = () => {
  const [isVisible, setIsVisible] = useState(null);
  console.log(isVisible, " isvisible");

  return (
    <div className="accordion-card">
      <div onClick={() => setIsVisible(1)}>
        Accordion1
        {isVisible === 1 && <p>lorem ipsum</p>}
      </div>

      <div onClick={() => setIsVisible(2)}>
        Accordion2
        {isVisible === 2 && <p>lorem ipsum</p>}
      </div>

      <div onClick={() => setIsVisible(3)}>
        Accordion3
        {isVisible === 3 && <p>lorem ipsum</p>}
      </div>
    </div>
  );
};
