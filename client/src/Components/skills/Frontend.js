import { useState } from "react";
import "boxicons";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Frontend = () => {
  const [skill, setskill] = useState([]);
  const navigate = useNavigate();
  const result = [];
  useEffect(() => {
    const win = window.sessionStorage;
    if (!win.getItem("auth")) {
      navigate("/login");
    } else if (win.getItem("type") === "admin") navigate("/admin");

    axios
      .get(
        `http://localhost:5000/applicant/skills/${window.sessionStorage.getItem(
          "id"
        )}`
      )
      .then((response) => {
        if (response.data) {
          setskill(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  skill.forEach((res) =>
    result.push(
      <div className="skills__group">
        <div className="skills__data">
          <i class="bx bx-badge-check"></i>

          <div>
            <h3 className="skills__name">{res.skill}</h3>
          </div>
        </div>
      </div>
    )
  );
  return (
    <div className="content_skill">
      <div className="skills__box">{result}</div>
    </div>
  );
};

export default Frontend;
