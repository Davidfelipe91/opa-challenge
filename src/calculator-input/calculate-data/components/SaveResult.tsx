import { type Element } from "../../../shared/elements.interface";
import type { ResultEntry } from "../../../shared/result-entry.interface";

interface SaveResultProps {
  minCalories: number;
  maxWeight: number;
  elements: Element[];
  optimalElements: string[];
}

export const SaveResult = ({
  minCalories,
  maxWeight,
  elements,
  optimalElements,
}: SaveResultProps) => {
  const handleSaveResult = () => {
    const newResult: ResultEntry = {
      minCalories,
      maxWeight,
      elements,
      optimalElements,
    };

    const historyString = localStorage.getItem("result");

    let resultsHistory: ResultEntry[] = [];

    if (historyString) {
      resultsHistory = JSON.parse(historyString);
    }

    resultsHistory.push(newResult);
    const updatedHistoryString = JSON.stringify(resultsHistory);
    localStorage.setItem("result", updatedHistoryString);
  };

  return (
    <button
      className="p-2 w-fit font-poppins-medium border-2 border-orange-secondary rounded-sm hover:bg-orange-secondary/30"
      onClick={handleSaveResult}
    >
      Save results
    </button>
  );
};
