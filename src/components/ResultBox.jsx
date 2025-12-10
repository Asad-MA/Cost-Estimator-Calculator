export default function ResultBox({ data }) {
  if (!data) return null;
  return (
    <div className="box">

      <p><b>Area:</b> {data.area.toFixed(2)} <small>(sq/m)</small></p>
      <p><b>Glass Price:</b> <small><b>AED</b></small> {data.glassPrice} <small>(per square meter)</small></p>
      <p><b>Glass Cost: </b><small><b>AED</b></small> {data.glassCost}<small>(For {data.area.toFixed(2)} sq/m)</small></p>
      <p><b>Wiring Cost:</b> <small><b>AED</b></small> {data.wiringCost}</p>
      <p><b>Transformer Required</b> {data.transformer.watt} <small>watts</small></p>
      <p><b>Transformer Price:</b> <small><b>AED</b></small> {data.transformer.price}</p>
      <p><b>Total Cost: </b><strong><small><b>AED</b></small> {data.totalPrice}</strong></p>
    </div>
  );
}
