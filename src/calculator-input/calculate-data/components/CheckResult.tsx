import { useState } from "react";

import type { ResultEntry } from "../../../shared/result-entry.interface";

export const CheckResult = () => {
  const [checkResult, setCheckResult] = useState<string[]>([]);

  const handleCheckResult = () => {
    const resultString = localStorage.getItem("result");

    if (!resultString) {
      setCheckResult(["No data available yet."]);
      return;
    }
    const storedResult: ResultEntry[] = JSON.parse(resultString);

    const printStoredResult = storedResult.map((s, i) => {
      return `Result ${i + 1}, the constraints were a maximum weight of ${
        s.maxWeight
      } and a minimum calorie requirement of ${
        s.minCalories
      }. The elements considered were: ${JSON.stringify(s.elements)

        .replaceAll("},{", " | ")
        .replaceAll("}", " ")
        .replaceAll("{", " ")
        .replaceAll(",", ", ")
        .replaceAll('"', "")} and the optimal combination found was: ${
        s.optimalElements
      }.`;
    });

    setCheckResult(printStoredResult);

    console.log(printStoredResult);
  };
  return (
    <div>
      <button
        className="p-2 font-poppins-medium border-2 border-orange-secondary rounded-sm hover:bg-orange-secondary/30"
        onClick={handleCheckResult}
      >
        Check old results
      </button>

      {checkResult.map((result, index) => (
        <div className="py-2" key={index}>
          <p className="font-poppins-light ">{result}</p>
        </div>
      ))}
    </div>
  );
};
