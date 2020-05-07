import React, { useState } from "react";
import "./App.css";

const MAX_BIN_LENGTH = 8;

function App() {
  const [binary, setBinary] = useState("");
  const [decimal, setDecimal] = useState("");
  const [notification, setNotification] = useState(null);

  const showMessage = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 2500);
  };

  const calculateDecimal = (binNumber) => {
    let sum = 0;
    for (let i = binNumber.length - 1; i >= 0; i--) {
      const exp = binNumber.length - 1 - i;
      sum += binNumber.charAt(i) * Math.pow(2, exp);
    }
    setDecimal(sum);
  };

  const handleBinaryInput = ({ target }) => {
    const allowedDigits = ["", "0", "1"];
    if (target.value.length <= MAX_BIN_LENGTH) {
      if (allowedDigits.includes(target.value.slice(-1))) {
        setBinary(target.value);
        if (target.value !== "") {
          calculateDecimal(target.value);
        } else {
          setDecimal("");
        }
      } else {
        showMessage("Input digit must be 0 or 1");
      }
    } else {
      showMessage(`Maximum input reached`);
    }
  };

  return (
    <div className="App">
      <div className="App-header">Bin2Dec</div>
      <main>
        {notification}
        <div>
          <input type="text" value={binary} onChange={handleBinaryInput} />
        </div>
        <div>
          <input type="text" value={decimal} onChange={() => {}} />
        </div>
      </main>
    </div>
  );
}

export default App;
