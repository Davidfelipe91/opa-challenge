interface ResponseMessageProps {
  optimalElements: string[];
  showMessage: boolean;
}
export const ResponseMessage = ({
  optimalElements,
  showMessage,
}: ResponseMessageProps) => {
  const messageContent =
    optimalElements.length === 0
      ? "There is still no combination that meets the requirements!"
      : `The best set of elements is: ${optimalElements.join(", ")}`;

  return (
    <div>
      {showMessage && (
        <p
          className={`font-poppins-regular ${
            optimalElements.length === 0 ? "font-poppins-medium text-red-700" : "text-dark-primary"
          }`}
        >
          {messageContent}
        </p>
      )}
    </div>
  );
};
