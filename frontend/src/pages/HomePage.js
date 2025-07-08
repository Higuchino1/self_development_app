import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>ホーム</h1>
      <hr style={{ width: "50%" }} />
      <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
        <div onClick={() => alert("Todoリストは準備中")} style={cardStyle("#cceeff")}>
          <p>Todoリスト</p>
          <img src="https://cdn-icons-png.flaticon.com/512/3564/3564550.png" width="100" />
        </div>
        <div onClick={() => navigate("/pet")} style={cardStyle("#ffffcc")}>
          <p>ペットのお世話</p>
          <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" width="100" />
        </div>
        <div onClick={() => navigate("/info")} style={cardStyle("#fcd6e3")}>
          <p>情報 <span style={{ color: "red" }}>NEW!</span></p>
          <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" width="100" />
        </div>
      </div>
    </div>
  );
};

const cardStyle = (bg) => ({
  backgroundColor: bg,
  padding: "20px",
  borderRadius: "10px",
  cursor: "pointer",
  width: "150px",
  textAlign: "center",
  boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
});

export default HomePage;