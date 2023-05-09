import "../../style/Deleteicon.css";
import "../../style/AddJob.css";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import { FaWindowClose } from "react-icons/fa";

import axios from "axios";
export default function Pop() {
  const [deletejob, setdeleletejob] = useState({
    job_id: "",
  });

  // destructing
  const { job_id } = deletejob;

  const deletejobbtn = async (e) => {
    e.preventDefault();
    alert("delete job offer affected");
    await axios
      .delete(`http://localhost:5000/admin/jobs/${deletejob.job_id}`)
      .catch((err) => console.log(err));
  };
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);
  };

  return (
    <div>
      <button className="icon-button" onClick={handleClick}>
        <FaPlus></FaPlus> &nbsp;Delete a job offer
      </button>

      {/* 👇️ show elements on click */}
      {isShown ? (
        <form onSubmit={(e) => deletejobbtn(e)}>
          <div className="add-job-Contianer" id="job">
            <div className="title">
              <div className="close" onClick={handleClick}>
                <h3>
                  <FaWindowClose></FaWindowClose>
                </h3>
              </div>
              <h2>Delete a job offer</h2>
              <hr className="add-job-hr"></hr>
            </div>

            <div className="Job-content">
              <label>
                {" "}
                job id
                <input
                  required
                  id="inp"
                  name="job_id"
                  value={job_id}
                  type="text"
                  onChange={(e) =>
                    setdeleletejob({ ...deletejob, job_id: e.target.value })
                  }
                ></input>
              </label>

              <button className="post-button">delete now!</button>
            </div>
          </div>
        </form>
      ) : null}

      {isShown ? <></> : null}
    </div>
  );
}
