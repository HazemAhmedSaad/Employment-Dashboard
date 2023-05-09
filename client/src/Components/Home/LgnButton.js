import "../../style/Button.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const Button = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [auth, setAuth] = useState(false);

  const logOut = () => {
    axios
      .post("http://localhost:5000/logout", {
        user_id: window.sessionStorage.getItem("id"),
      })
      .then(() => {
        window.sessionStorage.clear();
        setAuth(false);
        setName("");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logIn = () => {
    navigate("/login");
  };

  useEffect(() => {
    if (window.sessionStorage.getItem("auth")) {
      setAuth(window.sessionStorage.getItem("auth"));
      setName(window.sessionStorage.getItem("name"));
    }
  }, []);
  return auth ? (
    <div
      style={{
        position: "absolute",
        right: "10%",
        border: "0",
        padding: "0 20px",
        fontSize: "20px",
        textAlign: "center",
      }}
    >
      welcome, {name}
      <button
        className="btn"
        style={{ position: "relative", right: "-5%", width: "90px" }}
        onClick={logOut}
      >
        logout
      </button>
    </div>
  ) : (
    <button className="btn" onClick={logIn}>
      login
    </button>
  );
};
