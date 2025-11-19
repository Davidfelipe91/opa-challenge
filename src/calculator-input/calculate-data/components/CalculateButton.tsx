interface CalculateButtonProps {
  onCalculate: () => void;
}
export const CalculateButton = ({ onCalculate }: CalculateButtonProps) => {
  return (
    <div>
      <button
        className="p-2 font-poppins-medium border-2 border-orange-secondary rounded-sm hover:bg-orange-secondary/30"
        onClick={onCalculate}
      >
        Calculate elements
      </button>
    </div>
  );
};
