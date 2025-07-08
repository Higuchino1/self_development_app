import React from "react";
import { useNavigate } from "react-router-dom";

const InfoPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>お知らせ・情報ページ</h1>
      <p>新しい機能やイベント情報をここでお知らせします。</p>
      <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" width="150" alt="info" />
      <br />
      <button onClick={() => navigate(-1)} style={backButtonStyle}>← ホームに戻る</button>
    </div>
  );
};

const backButtonStyle = {
  marginTop: "20px",
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#eee",
  border: "1px solid #ccc",
  cursor: "pointer",
};

export default InfoPage;