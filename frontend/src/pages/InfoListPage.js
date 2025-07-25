import React from "react";
import { useNavigate } from "react-router-dom";

const infoItems = [
  {
    id: 1,
    title: "情報を詳しく見る",
    summary: "いろんな情報を見に行く",
    image: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  },
  {
    id: 2,
    title: "情報作成",
    summary: "共有したい情報が作成できます",
    image: "https://cdn-icons-png.flaticon.com/512/1828/1828911.png",
  },
];

const InfoListPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>情報一覧</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "30px" }}>
        {infoItems.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/info/${item.id}`)}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img src={item.image} alt={item.title} width="80" />
            <div style={{ textAlign: "left" }}>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoListPage;