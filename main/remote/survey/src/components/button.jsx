import React from "react";

export default function Button({ children }) {
  return <div className="bg-yellow-500">{children || `Provider ＣＣＣ button ${Math.random()}`}</div>;
}
