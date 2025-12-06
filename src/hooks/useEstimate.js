import { useState, useEffect } from "react";

export default function useEstimate(width, height, glassTypePrice) {
  const [area, setArea] = useState(0);
  const [wiringCost, setWiringCost] = useState(0);
  const [transformer, setTransformer] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!width || !height) return;

    const sqMeter = width * height;
    setArea(sqMeter);

    // Wiring cost slabs
    if (sqMeter <= 5) setWiringCost(200);
    else if (sqMeter <= 10) setWiringCost(300);
    else if (sqMeter <= 20) setWiringCost(400);
    else setWiringCost(600);

    // Transformer calculation (10 watts per sqm)
    const watts = sqMeter * 10;

    if (watts <= 50) setTransformer(50);
    else if (watts <= 100) setTransformer(100);
    else if (watts <= 200) setTransformer(200);
    else if (watts <= 300) setTransformer(300);
    else setTransformer(400);

  }, [width, height]);

  useEffect(() => {
    if (!area) return;

    const glassCost = area * glassTypePrice;
    const transformerCost = transformer * 10; // Example: Rs. 10 per watt

    setTotal(glassCost + wiringCost + transformerCost);
  }, [area, wiringCost, transformer]);

  return { area, wiringCost, transformer, total };
}
