import { useState, useEffect } from "react";
import settings from "../config/settings";

export default function useEstimate(width, height, glassPrice) {
  // const [area, setArea] = useState(0);
  // const [wiringCost, setWiringCost] = useState(0);
  // const [transformer, setTransformer] = useState(0);
  const [total, setTotal] = useState(0);

  if (!width || !height || !glassPrice) return {};

  // 1. AREA (sq meter)
  const area = width * height;

  console.log("Glass Price [useEstimate]:" , glassPrice);

  const glassCost = area * glassPrice;

  // 3. Required watts for transformer
  const requiredWatts = area * settings.transformerRules.wattsPerSqMeter;

  // 4. Select the nearest transformer that can handle required watts
  const transformer =
    settings.transformers.find((t) => t.watt >= requiredWatts) ||
    settings.transformers[settings.transformers.length - 1];

  const transformerCost = transformer.price;

  // 5. Wiring cost: simple cost per sq meter
  const wiringCost = area * settings.wiringRules.wattsPerSqMeter;

  // 6. Total
  const totalPrice = glassCost + transformerCost + wiringCost;

  return { area, glassCost, glassPrice, wiringCost, transformer, totalPrice };
}
