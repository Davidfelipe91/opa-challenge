import { WelcomeMessage } from "./components/WelcomeMessage";
import { CaloriesAndWeightInput } from "./components/CaloriesAndWeightInput";

interface MainDataProps {
  minCalories: number;
  maxWeight: number;
  onSetMinCalories: (v: number) => void;
  onSetMaxWeight: (v: number) => void;
}

export const MainData = ({
  minCalories,
  maxWeight,
  onSetMinCalories,
  onSetMaxWeight,
}: MainDataProps) => {
  return (
    <div className="flex flex-col gap-2 md:gap-4 ">
      <WelcomeMessage />
      <CaloriesAndWeightInput
        minCalories={minCalories}
        maxWeight={maxWeight}
        onSetMinCalories={onSetMinCalories}
        onSetMaxWeight={onSetMaxWeight}
      />
    </div>
  );
};
