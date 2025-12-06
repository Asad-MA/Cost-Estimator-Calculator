import { useState } from "react";
import Calculator from "./components/Calculator";
import EstimateForm from "./components/EstimateForm";
import ResultBox from "./components/ResultBox";
import useEstimate from "./hooks/useEstimate";

export default function App() {
  const [calculatorData, setCalculatorData] = useState({
    width: "",
    height: "",
    glassPrice: 1200,
  });

  const [finalData, setFinalData] = useState(null);

  const estimate = useEstimate(
    parseFloat(calculatorData.width),
    parseFloat(calculatorData.height),
    parseFloat(calculatorData.glassPrice)
  );

  const handleFormSubmit = async (userInfo) => {
    const data = {
      ...userInfo,
      ...calculatorData,
      ...estimate,
    };

    setFinalData(data);

    // Your WordPress endpoint call here
    console.log("Submitted to backend:", data);
  };

  return (
    <div className="container">
      <Calculator onChange={setCalculatorData} />
      <EstimateForm onSubmit={handleFormSubmit} />
      <ResultBox data={finalData} />
    </div>
  );
}
