import { useState } from "react";

export default function Calculator({ onChange }) {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [glassPrice, setGlassPrice] = useState(1200);
  const [error, setError] = useState("");

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
        <select className="cal-select w-100">
          <option disabled selected>Select Glass Type</option>
          <option value="standard">Laminated Smart glass Smart Glass</option>
          <option value="premium">Smart PDLC Film</option>
        </select>
      </div>

      <div className="field-wrap mb-20">
        <label className="d-block cal-label">Width  <span className="sub-label">Min: 1 - Max: 100 (m)</span></label>
        <div className="range-wrap pos-relative">
          <input
           className="w-100"
            type="range"
            step={1}
            min={1}
            max={100}
            value={width}
            onChange={(e) => {
              setWidth(e.target.value);
              update("width", e.target.value);
            }}
          />
          <span style={{ left: `${width}%` }} className="range-value">{width} m</span>
          <div className="d-flex w-100 justify-between"><span>0</span> <span>100</span></div>
        </div>
      </div>


      <div className="field-wrap">
        <label className="d-block cal-label">Height  <span className="sub-label">Min: 1 - Max: 100 (m)</span></label>
        <div className="min-max-wrap"></div>
        <div className="range-wrap pos-relative">
        <input
          className="w-100"
          step={1}
          min={1}
          max={100}
          type="range"
          value={height}
          onChange={(e) => {
            setHeight(e.target.value);
            update("height", e.target.value);
          }}
        />
        <span style={{ left: `${height}%` }} className="range-value">{height} m</span>
        <div className="d-flex w-100 justify-between"><span>0</span> <span>100</span></div>
        </div>
   
      </div>

    </div>
  );
}
