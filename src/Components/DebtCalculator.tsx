import React from "react";
import { useState, FormEvent } from "react";

export default function DebtCalculator() {
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const numbers = input.match(/[-+]?\d*\.\d+|\d+/g);
    if(numbers)
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={input}
          placeholder="Enter the Debt to Collect"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onSubmit={handleSubmit}>
          {" "}
          Collect The Debt!
        </button>
      </form>
    </div>
  );
}
