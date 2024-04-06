import { useEffect, useState } from "react";
import Button from "./Button";
import Subtitle from "./Subtitle";

const buttonList = ["Brightness", "Saturation", "Grayscale", "Inversion"];

const Filters = () => {
  const [activeButton, setActiveButton] = useState(0);

  useEffect(() => {
    console.debug(`Button ${buttonList[activeButton]} is active...`);
  }, [activeButton]);

  return (
    <div className="mx-5 mb-5 border-2 border-gray-400 rounded-sm">
      <Subtitle text="Filters" />

      <div className="m-2 grid grid-cols-2 grid-rows-2 gap-2">
        {buttonList.map((b, index) => {
          return (
            <Button
              key={index}
              text={b}
              active={activeButton === index}
              onClick={() => setActiveButton(index)}
            />
          );
        })}
      </div>

      <Subtitle text="Rotate & Flip" />
    </div>
  );
};

export default Filters;
