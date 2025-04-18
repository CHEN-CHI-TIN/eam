import React from "react";
import "/src/styles/globals.css";

export default function Button({ children }) {
  return <div className="bg-yellow-500 p-3">{children || `Provider ＣＣＣ button ${Math.random()}`}</div>;
}
