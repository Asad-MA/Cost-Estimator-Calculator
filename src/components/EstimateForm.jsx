import { useState } from "react";

export default function EstimateForm({ onSubmit , totalPrice}) {
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!mobile.trim() || !email.trim()) {
      setError("Please fill all required fields.");
      return;
    }

    setError("");
    onSubmit({ name, email, totalPrice});
  };

  return (
    <div className="form-section rounded-20 px-20 py-30">
    <form className="box d-flex direction-column" onSubmit={handleSubmit}>
    

      {error && <p style={{ color: "red" }}>{error}</p>}

    <div className="field-wrap mb-20">
    <label className="d-block cal-label">Full Name</label>
      <input
        className="w-100 form-field"
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type Your Name"
      />
    </div>

    <div className="field-wrap mb-20">
    <label className="d-block cal-label">Email Address</label>
      <input
      className="w-100 form-field"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@gmail.com"
      />
    </div>

      
<div className="field-wrap mb-20">
      <label className="d-block cal-label">Total Price</label>
      <div className="w-100 form-field d-flex align-center" readonly>
        <span className="currency">AED</span><span className="Total-Price"> {totalPrice ? totalPrice.toFixed(2) : "00.00"}</span>
      </div>
</div>
      <button type="submit">Get Estimate</button>
    </form>
    </div>
  );
}
