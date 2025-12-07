export default function ResultBox({ data }) {
  if (!data) return null;

  return (
    <div className="box">
      <h2>Total Summary</h2>

      <p>Area: {data.area.toFixed(2)} sq/m</p>
      <p>Glass Price: Rs {data.glassPrice}</p>
      <p>Wiring Cost: Rs {data.wiringCost}</p>
      <p>Transformer: {data.transformer} watts</p>
      <p>Total Cost: <strong>Rs {data.total}</strong></p>
    </div>
  );
}
