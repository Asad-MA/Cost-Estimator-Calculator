import { useState } from "react";
import Calculator from "./components/Calculator";
import EstimateForm from "./components/EstimateForm";
import ResultBox from "./components/ResultBox";
import useEstimate from "./hooks/useEstimate";


async function testMail(info) {
  const res = await fetch("https://ifsmartglass.com/wp-json/estimator/v1/send", {
    method: "POST",
    headers: {
    'Content-Type': 'application/json',
    'X-WP-Nonce': EC_API.nonce,
    },
    body: JSON.stringify({
      name: info.name,
      email:info.email,
      mobile:info.phone,
      width:info.width,
      height:info.height,
      glassPrice:info.glassPrice,
      glassCost:info.glassCost,
      totalPrice:info.totalPrice,
      transformer:info.transformer.watt,
      transformerCost:info.transformer.price,
      wiringCost:info.wiringCost,
      area:info.area,
      glassType:info.glassType || "Standard",
    })
  });

  const data = await res.json();
  console.log("Response:", data);
}


export default function App() {
  const [calculatorData, setCalculatorData] = useState({
    width: 1,
    height: 1,
    glassPrice: 1200,
    glassType: ".",
  });

  const [finalData, setFinalData] = useState(null);

  const estimate = useEstimate(
    parseFloat(calculatorData.width),
    parseFloat(calculatorData.height),
    parseFloat(calculatorData.glassPrice)
  );

  const handleFormSubmit = async (userInfo) => {
    console.log("Estimate Data:" , estimate);
    const data = {
      ...userInfo,
      ...calculatorData,
      ...estimate,
    };

    setFinalData(data);

    // Your WordPress endpoint call here
    console.log("Submitted to backend:", data);
    await testMail(data);
  };

  return (
    <div className="app-container">
      <div className="calculator-box gap-40">
        <div className="calculator-container flex-grow w-50">
          <Calculator
            onChange={(update) =>
              setCalculatorData((prev) => ({ ...prev, ...update }))
            }
            finalData={finalData}
          />
        </div>
        <div className="estimate-form-container flex-grow d-flex direction-column w-50">
          
          <EstimateForm onSubmit={handleFormSubmit} totalPrice={estimate.totalPrice} />

        </div>
      </div>

      <div className="result-box-container">
        {/* <ResultBox data={finalData} /> */}
      </div>
    </div>
  );
}
