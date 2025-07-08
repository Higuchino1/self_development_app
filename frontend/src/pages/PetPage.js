import React, { useState } from "react";

const PetPage = () => {
  const [coins, setCoins] = useState(100);

  const handleAction = (cost) => {
    if (coins >= cost) {
      setCoins(coins - cost);
    } else {
      alert("コインが足りません！");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>ペットのお世話</h1>
      <div>🪙 {coins}</div>
      <img src="https://placekitten.com/300/300" alt="pet" style={{ margin: "20px" }} />
      <div>
        <button onClick={() => handleAction(20)}>餌をあげる</button>
        <button onClick={() => handleAction(15)}>撫でる</button>
        <button onClick={() => handleAction(15)}>運動させる</button>
        <button onClick={() => handleAction(10)}>もう一つ</button>
      </div>
    </div>
  );
};

export default PetPage;