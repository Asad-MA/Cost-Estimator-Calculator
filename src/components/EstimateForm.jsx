import { useState } from "react";

export default function EstimateForm({ onSubmit }) {
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!mobile.trim() || !email.trim()) {
      setError("Please fill all required fields.");
      return;
    }

    setError("");
    onSubmit({ mobile, email });
  };

  return (
    <form className="box" onSubmit={handleSubmit}>
      <h2>Your Details</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <label>Email Address</label>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@gmail.com"
      />

      <label>Mobile Number</label>
      <input
        type="tel"
        required
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        placeholder="03XX-XXXXXXX"
      />

      <button type="submit">Get Estimate</button>
    </form>
  );
}
