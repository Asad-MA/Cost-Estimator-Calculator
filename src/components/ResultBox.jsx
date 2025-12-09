export default function ResultBox({ data }) {
  if (!data) return null;
console.log(data);
  return (
    <div className="box">
      <h2>Total Summary</h2>

      <p>Area: {data.area.toFixed(2)} sq/m</p>
      <p>Glass Price: Rs {data.glassPrice}</p>
      <p>Wiring Cost: Rs {data.wiringCost}</p>
      <p>Transformer: {data.transformer.watt} watts</p>
      <p>Transformer Price: {data.transformer.price} AED</p>
      <p>Total Cost: <strong>Rs {data.total}</strong></p>
    </div>
  );
}
