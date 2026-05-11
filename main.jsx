import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{
      height: "100vh",
      background: "#020611",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "40px",
      fontFamily: "Arial"
    }}>
      THE METHOD TRADING
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
