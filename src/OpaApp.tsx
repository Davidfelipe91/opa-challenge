import { CalculatorInput } from "./calculator-input/CalculatorInput";

export const OpaApp = () => {
  return (
    <div className="flex flex-row min-h-screen items-start md:items-center justify-center bg-blue-primary">
      <CalculatorInput />
    </div>
  );
};
