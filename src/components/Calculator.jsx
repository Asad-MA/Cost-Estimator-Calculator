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
      <h2>Glass Estimate Calculator</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <label>Width (meters):</label>
      <input
        type="number"
        value={width}
        onChange={(e) => {
          setWidth(e.target.value);
          update("width", e.target.value);
        }}
      />

      <label>Height (meters):</label>
      <input
        type="number"
        value={height}
        onChange={(e) => {
          setHeight(e.target.value);
          update("height", e.target.value);
        }}
      />

      <label>Glass Price (per sq/m):</label>
      <input
        type="number"
        value={glassPrice}
        onChange={(e) => {
          setGlassPrice(e.target.value);
          update("glassPrice", e.target.value);
        }}
      />
    </div>
  );
}
