import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import image from "../../assets/images/web04.jpg";
import "../../style/Banner.css";
import { Search } from "./Search";

export const Banner = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const win = window.sessionStorage;
    if (win.getItem("type") === "admin") navigate("/admin");
  });
  return (
    <div className="container">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 610,
        }}
      ></div>

      <div className="centered">
        <Search></Search>
      </div>
    </div>
  );
};
