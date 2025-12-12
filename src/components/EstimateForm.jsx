import { useState } from "react";


export default function EstimateForm({ onSubmit, totalPrice }) {
  const [totalCost, setTotalCost] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !phone.trim() || privacyChecked === false) {
      setError("Please fill all required fields.");
      return;
    }

    setTotalCost(totalPrice);

    setError("");
    onSubmit({ name, email, phone, privacyChecked, totalPrice });
  };

  return (
    <div className="form-section rounded-30 px-30 py-40">
      <form className="box d-flex direction-column" onSubmit={handleSubmit}>
        {error && <p className="form-warnings"><span><img src="./exclamation.png" /></span>{error}</p>}

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
            placeholder="Type Your Email"
          />
        </div>

        <div className="field-wrap mb-20">
          <label className="d-block cal-label">Phone no</label>
          <input
            className="w-100 form-field"
            type="number"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Type Your Phone no"
          />
        </div>

        <div className="field-wrap mb-20">
          <label className="d-block cal-label">Total Price</label>
          <div className="w-100 form-field d-flex align-center" >
            <span className="currency">AED</span>
            <span className="Total-Price">
              {" "}
              {totalCost}
            </span>
          </div>
        </div>
        <div className="field-wrap mb-20">
          <label className="d-block">
            <input name="privacy-aggrement" type="checkbox" checked={privacyChecked} onChange={(e) => setPrivacyChecked(e.target.checked)} />
            By clicking this box, I agree to your <a href="https://ifsmartglass.com/privacy-policy/">Privacy Policy</a>
          </label>
        </div>
        <button type="submit" className="btn-submit">Get Estimate</button>
      </form>
    </div>
  );
}
