import { useState } from "react";
import "./pop.css";

export default function Pop(props) {
  const [isShown, setIsShown] = useState(false);
  const data = props.data;
  const result = [];
  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);
  };

  for (const qual in data.qualifications) {
    result.push(
      <div>
        <div className="requirement">
          <i class="bx bx-badge-check"></i>
          <p className="req">{data.qualifications[qual].qualification}</p>
        </div>
        <div className="requirement">
          <i class="bx bx-badge-check"></i>
          <p className="req">{data.qualifications[qual].qualification_desc}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <button id="view-btn" className="icon-button" onClick={handleClick}>
        View
      </button>

      {/* 👇️ show elements on click */}
      {isShown ? (
        <div className="Contianer">
          <div className="title"></div>
          <div className="content">
            <h2>Job description</h2>
            <hr />
            {data.Description}
            <div className="about_job">
              <h2>About the job </h2>
              <hr />
              <p className="aboutp">
                <i class="bx bx-badge-check"></i> SALARY : {data.offer}$ ,
              </p>
            </div>
            <h2>Required experience </h2>
            <hr />

            {result}
          </div>
        </div>
      ) : null}

      {isShown ? <></> : null}
    </div>
  );
}
