import { type Element } from "../../../shared/elements.interface";

interface ElementsInputProps {
  value: Element;
  onChange: (v: Element) => void;
}

export const ElementsInput = ({ value, onChange }: ElementsInputProps) => {
  return (
    <div className="font-poppins-regular flex flex-col md:flex-row gap-2 md:gap-8">
      <div className="flex flex-col">
        <label className="font-poppins-light text-sm">Weight</label>
        <input
          className="p-1 font-poppins-regular text-md  text-dark-primary border border-blue-secondary rounded-sm hover:bg-blue-secondary/30"
          type="number"
          min={0}
          placeholder="Weight"
          value={value.weight}
          onChange={(e) =>
            onChange({ ...value, weight: Number(e.target.value) })
          }
        />
      </div>
      <div className="flex flex-col">
        <label className="font-poppins-light text-sm">Calories</label>
        <input
          className="p-1 font-poppins-regular text-md text-dark-primary  border border-blue-secondary rounded-sm hover:bg-blue-secondary/30"
          type="number"
          min={0}
          placeholder="Calories"
          value={value.calories}
          onChange={(e) =>
            onChange({ ...value, calories: Number(e.target.value) })
          }
        />
      </div>
    </div>
  );
};
