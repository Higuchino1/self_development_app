import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const infoDetails = {
  1: {
    title: "情報一覧",
    content: "いろんな情報を見に行く",
    image: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  },
  2: {
    title: "情報作成",
    content: "共有したい情報が作成できます",
    image: "https://cdn-icons-png.flaticon.com/512/1828/1828911.png",
  },
};

const InfoDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const info = infoDetails[id];

  if (!info) return <p>情報が見つかりません</p>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>{info.title}</h1>
      <img src={info.image} width="150" alt={info.title} />
      <p style={{ marginTop: "20px" }}>{info.content}</p>
      <button onClick={() => navigate(-1)} style={backButtonStyle}>← 戻る</button>
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

export default InfoDetailPage;