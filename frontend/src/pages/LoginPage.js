import React, { useState } from "react";
import axios from "axios";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      await axios.post(
        "http://localhost:8000/api/auth/login/",
        { username, password },
        { withCredentials: true }
      );
      onLogin();
    } catch (err) {
      alert("ログイン失敗：" + err.response?.data?.detail);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h2>ログイン</h2>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="ユーザー名" /><br /><br />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="パスワード" /><br /><br />
      <button onClick={login}>ログイン</button>
    </div>
  );
};

export default LoginPage;