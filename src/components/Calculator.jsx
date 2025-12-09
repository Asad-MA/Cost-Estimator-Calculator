import { useState } from "react";
import settings from "../config/settings.js";

export default function Calculator({ onChange }) {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [glassPrice, setGlassPrice] = useState("");
  const [error, setError] = useState("");

  const widthField = settings.fields.width;
  const heightField = settings.fields.height;

  const update = (field, value) => {
    const data = {
      width,
      height,
      glassPrice,
      [field]: value,
    };

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
            setGlassPrice(e.target.value);
            console.log(e.target.value);
            update("glassPrice", e.target.value);
          }}
        >
          <option disabled selected>
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
          Width <span className="sub-label">Min: {widthField.min} - Max: {widthField.max} (m)</span>
        </label>
        <div className="range-wrap pos-relative">
          <input
            className="w-100 styled-range"
            type="range"
            step={widthField.steps}
            min={widthField.min}
            max={widthField.max}
            value={width}
            onChange={(e) => {
              setWidth(e.target.value);
              update("width", e.target.value);
            }}
          />
          <span style={{ left: `${width}%` }} className="range-value">
            {width} m
          </span>
          <div className="d-flex w-100 justify-between">
            <span>{widthField.min}</span> <span>{heightField.max}</span>
          </div>
        </div>
      </div>

      <div className="field-wrap mb-20">
        <label className="d-block cal-label">
          Height <span className="sub-label">Min: {heightField.min} - Max: {heightField.max} (m)</span>
        </label>
        <div className="min-max-wrap"></div>
        <div className="range-wrap pos-relative">
          <input
            className="w-100 styled-range"
            step={heightField.steps}
            min={heightField.min}
            max={heightField.max}
            type="range"
            value={height}
            onChange={(e) => {
              setHeight(e.target.value);
              update("height", e.target.value);
            }}
          />
          <span style={{ left: `${height}%` }} className="range-value">
            {height} m
          </span>
          <div className="d-flex w-100 justify-between">
            <span>{heightField.min}</span> <span>{heightField.max}</span>
          </div>
        </div>
      </div>
      <div className="field-wrap">
        <label className="d-block cal-label">Total Summary</label>
        <div className="d-flex gap-10">
          <div className="form-field w-33">
            <div className="inner-label">Glass Price</div>
            <div className="d-flex align-center inner-field">
              <span className="currency">AED</span>
              <span className="Total-Price">123</span>
            </div>
          </div>
          <div className="form-field w-33">
            <div className="inner-label">Transformer Price</div>
            <div className="d-flex align-center inner-field">
              <span className="currency">AED</span>
              <span className="Total-Price">123</span>
            </div>
          </div>
          <div className="form-field w-33">
            <div className="inner-label">Wiring Price</div>
            <div className="d-flex align-center inner-field">
              <span className="currency">AED</span>
              <span className="Total-Price">123</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
