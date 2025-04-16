import React from "react";

export default function Button({ children }) {
    return <div>{children || `Provider button ${Math.random()}`}</div>;
}
