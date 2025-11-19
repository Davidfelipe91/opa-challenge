interface AddElementButtonProps {
  handleAddElement: () => void;
}

export const AddElementButton = ({
  handleAddElement,
}: AddElementButtonProps) => {
  return (
    <div>
      <button
        className="p-2 font-poppins-medium border-2 border-orange-secondary rounded-sm hover:bg-orange-secondary/30"
        onClick={handleAddElement}
      >
        Add element
      </button>
    </div>
  );
};
