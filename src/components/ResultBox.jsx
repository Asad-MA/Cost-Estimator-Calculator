export default function ResultBox({ data }) {
  if (!data) return null;

  return (
    <div className="box">
      <div className="summary-grid">
        <div className="summary-item">
          <b className="item-key">Area</b>
          <span className="item-value">{data.area.toFixed(2)} <small>(sq/m)</small></span>
        </div>
        <div className="summary-item">
          <b className="item-key">Glass Type:</b>
          <span className="item-value">{data.glassType}</span>
        </div>
         <div className="summary-item">
          <b className="item-key">Glass Cost:</b>
          <span className="item-value"><small><b>AED</b></small> {data.glassCost}</span>
        </div>
        <div className="summary-item">
          <b className="item-key">Wiring Cost:</b>
          <span className="item-value"><small><b>AED</b></small> {data.wiringCost}</span>
        </div>
        <div className="summary-item">
          <b className="item-key">Transformer Required:</b>
          <span className="item-value">{data.transformer.watt} <small><b>watts</b></small></span>
        </div>
        <div className="summary-item">
          <b className="item-key">Transformer Cost:</b>
          <span className="item-value"><small><b>AED</b></small> {data.transformer.price}</span>
        </div>
        <div className="summary-item">
          <b className="item-key">Total Cost:</b>
          <span className="item-value"><strong><small><b>AED</b></small> {data.totalPrice}</strong></span>
        </div>
      </div>
    </div>
  );
}
