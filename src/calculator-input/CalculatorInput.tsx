import { type Element } from "../shared/elements.interface";

import { MainData } from "./main-data/MainData";
import { ElementData } from "./element-data/ElementData";
import { CalculateData } from "./calculate-data/CalculateData";
import { useState } from "react";

export const CalculatorInput = () => {
  const [minCalories, setMinCalories] = useState<number>(0);
  const [maxWeight, setMaxWeight] = useState<number>(0);
  const [elements, setElements] = useState<Element[]>([
    { weight: 0, calories: 0 },
  ]);

  return (
    <div className="flex flex-col gap-4 md:gap-8 w-fit md:w-200 max-w-200 mx-4 md:mx-0 p-4 py-6 md:p-8 mt-4 md:m-8 border-2 border-orange-secondary rounded-3xl bg-orange-primary">
      <MainData
        minCalories={minCalories}
        maxWeight={maxWeight}
        onSetMinCalories={setMinCalories}
        onSetMaxWeight={setMaxWeight}
      />
      <ElementData elements={elements} onSetElements={setElements} />
      <CalculateData
        minCalories={minCalories}
        maxWeight={maxWeight}
        elements={elements}
      />
    </div>
  );
};
