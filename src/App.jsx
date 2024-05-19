import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const inputValue = (event) => {
    setInput(input.concat(event.target.value));
  };

  const clear = () => {
    setInput("");
  };

  const calculator = () => {
    setInput(eval(input));
  };

  const del = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <>
      <div className="calculator-wrapper">
        <div className="calculator">
          <form action="">
            <div className="display">
              <input type="text" value={input} />
            </div>
            <div>
              <input type="button" value="AC" onClick={clear} />
              <input type="button" value="DE" onClick={del} />
              <input type="button" value="." onClick={inputValue} />
              <input type="button" value="/" onClick={inputValue} />
            </div>
            <div>
              <input type="button" value="7" onClick={inputValue} />
              <input type="button" value="8" onClick={inputValue} />
              <input type="button" value="9" onClick={inputValue} />
              <input type="button" value="*" onClick={inputValue} />
            </div>
            <div>
              <input type="button" value="4" onClick={inputValue} />
              <input type="button" value="5" onClick={inputValue} />
              <input type="button" value="6" onClick={inputValue} />
              <input type="button" value="+" onClick={inputValue} />
            </div>
            <div>
              <input type="button" value="1" onClick={inputValue} />
              <input type="button" value="2" onClick={inputValue} />
              <input type="button" value="3" onClick={inputValue} />
              <input type="button" value="-" onClick={inputValue} />
            </div>
            <div>
              <input type="button" value="00" onClick={inputValue} />
              <input type="button" value="0" onClick={inputValue} />
              <input
                type="button"
                value="="
                className="equals-to"
                onClick={calculator}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
