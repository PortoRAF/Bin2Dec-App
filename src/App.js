import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import Notification from "./components/Notification";

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
  };

  return (
    <div className="App">
      <Header />
      <main>
        <div>
          <InputBox
            label="binary"
            value={binary}
            onChange={handleBinaryInput}
          />
        </div>
        <div>
          <InputBox label="decimal" value={decimal} onChange={() => {}} />
        </div>
        <div>
          <Notification note={notification} />
        </div>
      </main>
      <footer>
        <div className="App-link">
          <a href="https://github.com/PortoRAF/Bin2Dec-App">
            https://github.com/PortoRAF/Bin2Dec-App
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
