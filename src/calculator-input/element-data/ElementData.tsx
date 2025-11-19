import { type Element } from "../../shared/elements.interface";

import { ElementMessage } from "./components/ElementMessage";
import { ElementsInput } from "./components/ElementsInput";
import { AddElementButton } from "./components/AddElementButton";

interface ElementDataProps {
  elements: Element[];
  onSetElements: (elements: Element[]) => void;
}

export const ElementData = ({ elements, onSetElements }: ElementDataProps) => {
  const updateElement = (index: number, updated: Element) => {
    const nextElement = [...elements];
    nextElement[index] = updated;
    onSetElements(nextElement);
  };

  const handleAddElement = () => {
    onSetElements([...elements, { weight: 0, calories: 0 }]);
    console.log("Element added", elements);
  };

  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <ElementMessage />

      {elements.map((element, index) => (
        <div className="flex flex-col gap-2" key={index}>
          <span className="font-poppins-medium mr-2">Element {index + 1}:</span>
          <ElementsInput
            value={element}
            onChange={(updated) => updateElement(index, updated)}
          />
        </div>
      ))}

      <AddElementButton handleAddElement={handleAddElement} />
    </div>
  );
};
