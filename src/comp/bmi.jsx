import React, { useState } from "react";
import "./bmi.css";

const Calc = () => {
  const [height, setHeight] = useState(0); 
  const [weight, setWeight] = useState(0);
  const [bmi, setBMI] = useState(0);
  const [message, setMessage] = useState("");
  const [popupMessage, setPopupMessage] = useState("");

  const calcBMI = (e) => {
  e.preventDefault();
  if (weight === 0 || height === 0) {
    setPopupMessage("Please enter a valid weight & height");
  } else {
    const bmiValue =
      (Number(weight) / (Number(height) * Number(height))) * 703;
    setBMI(bmiValue.toFixed(1));
    if (bmiValue < 25) setMessage("You are under weight");
    else if (bmiValue >= 25 && bmiValue < 30) setMessage("You are healthy");
    else setMessage("You are over weight");
  }
};

  const reload = () => window.location.reload();

  return (
    <div className="contaier">
      <h2>BMI Calculator</h2>
      {popupMessage && (
        <div className="popup-box">
        <p>{popupMessage}</p>
        <button onClick={() => setPopupMessage("")}>Close</button>
        </div>
        )}
      <form onSubmit={calcBMI}>
        <div>
          <label>Weight (lbs)</label>
          <input
            type="number"
            placeholder="Enter weight value"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label>Height (In)</label>
          <input
            type="number"
            placeholder="Enter height value"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="button-group">
          <button className="btn" type="submit">
            Submit
          </button>
          <button className="btn btn-outline" onClick={reload} type="button">
            Reload
          </button>
        </div>
        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </form>
    </div>
  );
};

export default Calc;
