import { useState } from "react";
import settings from "../config/settings.js";
import ResultBox from "./ResultBox.jsx";

export default function Calculator({ onChange, finalData }) {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [glassPrice, setGlassPrice] = useState("");
  const [error, setError] = useState("");

  const widthField = settings.fields.width;
  const heightField = settings.fields.height;

  const update = (field, value) => {
    const data = {
      width: field === "width" ? parseFloat(value) : parseFloat(width),
      height: field === "height" ? parseFloat(value) : parseFloat(height),
      glassPrice:
        field === "glassPrice" ? parseFloat(value) : parseFloat(glassPrice),
    };

    console.log("Chnaged Data:", data);

    onChange(data);
  };

  return (
    <div className="box">
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="field-wrap mb-20">
        <label className="d-block cal-label">Smart Glass Type</label>
        <select
          className="cal-select w-100"
          onChange={(e) => {
            const value = e.target.value;
            setGlassPrice(value);
            update("glassPrice", value);
          }}
        >
          <option disabled defaultValue={""}>
            Select Glass Type
          </option>

          {Object.keys(settings.glassTypes).map((glassType) => (
            <option key={glassType} value={settings.glassTypes[glassType]}>
              {glassType}
            </option>
          ))}
        </select>
      </div>

      <div className="field-wrap mb-20">
        <label className="d-block cal-label">
          Width{" "}
          <span className="sub-label">
            Min: {widthField.min} - Max: {widthField.max} (m)
          </span>
        </label>
        <div className="range-wrap pos-relative">
          <input
            className="w-100 styled-range"
            type="range"
            required
            step={widthField.steps}
            min={widthField.min}
            max={widthField.max}
            value={width || 1}
            onChange={(e) => {
              setWidth(e.target.value);
              update("width", e.target.value);
            }}
          />
          <span style={{ left: `${width}%` }} className="range-value">
            {width || 1} m
          </span>
          <div className="d-flex w-100 justify-between">
            <span>{widthField.min}</span> <span>{heightField.max}</span>
          </div>
        </div>
      </div>

      <div className="field-wrap mb-20">
        <label className="d-block cal-label">
          Height{" "}
          <span className="sub-label">
            Min: {heightField.min} - Max: {heightField.max} (m)
          </span>
        </label>
        <div className="min-max-wrap"></div>
        <div className="range-wrap pos-relative">
          <input
            className="w-100 styled-range"
            step={heightField.steps}
            min={heightField.min}
            max={heightField.max}
            type="range"
            value={height || 1}
            onChange={(e) => {
              setHeight(e.target.value);
              update("height", e.target.value);
            }}
          />
          <span style={{ left: `${height || 1}%` }} className="range-value">
            {height || 1} m
          </span>
          <div className="d-flex w-100 justify-between">
            <span>{heightField.min}</span> <span>{heightField.max}</span>
          </div>
        </div>
      </div>
      <div className="field-wrapb">
        <label className="d-block cal-label">Total Summary</label>
        <ResultBox data={finalData} />
      </div>
    </div>
  );
}
