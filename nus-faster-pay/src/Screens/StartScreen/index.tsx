import React from "react";
import { useNavigate } from "react-router-dom";

function StartScreen() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/account-dashboard", { state: ivConfig })}>Click to start!</button>
    </div>
  );
}

export default StartScreen;
