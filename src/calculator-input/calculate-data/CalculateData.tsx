import { useState } from "react";

import { type Element } from "../../shared/elements.interface";

import { CalculateButton } from "./components/CalculateButton";
import { ResponseMessage } from "./components/ResponseMessage";
import { SaveResult } from "./components/SaveResult";
import { CheckResult } from "./components/CheckResult";

interface CalculateDataProps {
  minCalories: number;
  maxWeight: number;
  elements: Element[];
}

export const CalculateData = ({
  minCalories,
  maxWeight,
  elements,
}: CalculateDataProps) => {
  const [optimalElements, setOptimalElements] = useState<string[]>([]);
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const handleCalculate = () => {
    setShowMessage(true);

    let bestCalories: number = 0;

    if (!(elements.length > 0)) return;

    const possibleOptions: number = Math.pow(2, elements.length);

    for (let i = 0; i < possibleOptions - 1; i++) {
      let totalWeight: number = 0;
      let totalCalories: number = 0;
      const elementOptions: string[] = [];

      for (let j = 0; j < elements.length; j++) {
        if (i & (1 << j)) {
          const weight: number = elements[j].weight;
          const calories: number = elements[j].calories;

          totalWeight += weight;
          totalCalories += calories;
          elementOptions.push("E" + (j + 1));
        }
      }

      if (!(totalWeight <= maxWeight && totalCalories >= minCalories)) continue;
      if (!(totalCalories > bestCalories)) continue;

      bestCalories = totalCalories;
      setOptimalElements(elementOptions);
    }
  };

  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <div className="flex flex-col gap-2">
        <CalculateButton onCalculate={handleCalculate} />
        <ResponseMessage
          optimalElements={optimalElements}
          showMessage={showMessage}
        />
      </div>

      {optimalElements.length > 0 && (
        <SaveResult
          minCalories={minCalories}
          maxWeight={maxWeight}
          elements={elements}
          optimalElements={optimalElements}
        />
      )}
      <CheckResult />
    </div>
  );
};
