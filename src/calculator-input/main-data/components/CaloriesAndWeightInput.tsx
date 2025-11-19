interface CaloriesAndWeightInputProps {
  minCalories: number;
  maxWeight: number;
  onSetMinCalories: (v: number) => void;
  onSetMaxWeight: (v: number) => void;
}

export const CaloriesAndWeightInput = ({
  minCalories,
  maxWeight,
  onSetMinCalories,
  onSetMaxWeight,
}: CaloriesAndWeightInputProps) => {
  return (
    <div className="font-poppins-regular flex flex-col md:flex-row gap-2 md:gap-8">
      <div className="flex flex-col">
        <label className="font-poppins-light text-sm">Max weight</label>
        <input
          className="p-1 font-poppins-regular text-md text-dark-primary border border-blue-secondary rounded-sm hover:bg-blue-secondary/30"
          type="number"
          min={0}
          placeholder="Max weight"
          value={maxWeight}
          onChange={(e) => onSetMaxWeight(Number(e.target.value))}
        />
      </div>

      <div className="flex flex-col">
        <label className="font-poppins-light text-sm">Min calories</label>
        <input
          className="p-1 font-poppins-regular text-md  text-dark-primary border border-blue-secondary rounded-sm hover:bg-blue-secondary/30"
          type="number"
          min={0}
          placeholder="Min calories"
          value={minCalories}
          onChange={(e) => onSetMinCalories(Number(e.target.value))}
        />
      </div>
    </div>
  );
};
