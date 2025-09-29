import React, { useState } from "react";

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        const evalResult = eval(expression);
        setResult(evalResult);
      } catch {
        setResult("Error");
      }
    } else if (value === "DEL") {
      setExpression(expression.slice(0, -1));
    } else if (value === "AC") {
      setExpression("");
      setResult("");
    } else {
      setExpression(expression + value);
    }
  };

  const buttons = [
    "/", "*", "+", "-", "DEL",
    "1", "2", "3",
    "4", "5", "6",
    "7", "8", "9",
    "0", ".", "=", "AC"
  ];

  const isOperator = (val) => ["/", "*", "+", "-", "DEL", "AC"].includes(val);

  return (
    <div style={styles.calculator}>
      <div style={styles.display}>
        <div style={styles.result}>{result !== "" && `(${result})`}</div>
        <div style={styles.expression}>{expression || "0"}</div>
      </div>
      <div style={styles.buttons}>
        {buttons.map((btn, index) => (
          <button
            key={index}
            style={{
              ...styles.button,
              ...(isOperator(btn) ? styles.operator : {})
            }}
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  calculator: {
    width: "300px",
    margin: "50px auto",
    backgroundColor: "#111827",
    borderRadius: "15px",
    overflow: "hidden",
    fontFamily: "Segoe UI, sans-serif",
    color: "white",
    boxShadow: "0 0 15px rgba(0,0,0,0.5)"
  },
  display: {
    padding: "20px",
    backgroundColor: "#1f2937",
    textAlign: "right",
    minHeight: "60px"
  },
  result: {
    fontSize: "14px",
    color: "#9ca3af"
  },
  expression: {
    fontSize: "24px",
    fontWeight: "bold",
    wordWrap: "break-word"
  },
  buttons: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "1px",
    backgroundColor: "#1f2937"
  },
  button: {
    padding: "20px",
    fontSize: "18px",
    border: "none",
    backgroundColor: "#111827",
    color: "white",
    cursor: "pointer",
    transition: "background-color 0.2s"
  },
  operator: {
    backgroundColor: "#1f98d4ff"
  }
};

export default App;
