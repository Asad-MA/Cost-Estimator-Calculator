import { useState } from "react";
import Calculator from "./components/Calculator";
import EstimateForm from "./components/EstimateForm";
import ResultBox from "./components/ResultBox";
import useEstimate from "./hooks/useEstimate";

export default function App() {
  const [calculatorData, setCalculatorData] = useState({
    width: 1,
    height: 1,
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
    <div className="app-container">
      <div className="calculator-box gap-40">
        <div className="calculator-container flex-grow w-50">
          <Calculator onChange={setCalculatorData} finalData={finalData}/>
        </div>
        <div className="estimate-form-container flex-grow d-flex direction-column w-50">
          
          <EstimateForm onSubmit={handleFormSubmit} totalPrice={estimate.totalPrice} />

        </div>
      </div>

      <div className="result-box-container">
        
      </div>
    </div>
  );
}
