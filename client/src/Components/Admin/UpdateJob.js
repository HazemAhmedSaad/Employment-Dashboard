import "../../style/AddJob.css";
import { FaPlus } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
// import { updateJob } from "../../../../server/controllers/jobscontroller";
export default function Pop() {
  const [error, setError] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [addjob, setAddjob] = useState({
    jobId: "",
    position: "",
    companyName: "",
    Description: "",
    offer: "",
    max_candidate_number: "",
    qualification: "",
  });

  // destructing
  const {
    jobId,
    position,
    Description,
    offer,
    max_candidate_number,
    qualification,
  } = addjob;
  const onInputChange = (e) => {
    setAddjob({ ...addjob, [e.target.name]: e.target.value });
  };
  const updateJobBtn = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:5000/admin/jobs/${addjob.jobId}`, addjob)
      .then((res) => {
        if (res.data) {
          alert(res.data);
        }
      })

      .catch((err) => {
        alert("There was an error");
        console.log(err);
      });
  };
  const [isShown, setIsShown] = useState(false);

  const getJob = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:5000/admin/jobs/${addjob.jobId}`)
      .then((res) => {
        if (res.data) {
          axios.get("http://localhost:5000/qualifications").then((response) => {
            if (response.data) {
              const qual = [];
              const qu = [];
              qual.push(
                response.data.filter((value) => {
                  if (value.job_id === parseInt(addjob.jobId)) {
                    return true;
                  }
                  return false;
                })
              );
              qual[0].forEach((elem) => qu.push(elem.qualification));
              setQualifications(qu.join(","));
            }
          });
          setError("");
          setAddjob({
            ...addjob,
            position: res.data[0].position,
            Description: res.data[0].Description,
            offer: res.data[0].offer,
            max_candidate_number: res.data[0].max_candidate_number,
            qualification: qualifications,
          });
        }
      })
      .catch((err) => {
        if (err) setError("There is no job with this id");
      });
  };

  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);
  };

  return (
    <div>
      <button className="icon-button" onClick={handleClick}>
        <FaPlus></FaPlus> &nbsp;Update Job
      </button>

      {/* 👇️ show elements on click */}
      {isShown ? (
        <>
          <form onSubmit={(e) => updateJobBtn(e)}>
            <div className="add-job-Contianer" id="job">
              <div className="title">
                <div className="close" onClick={handleClick}>
                  <h3>
                    <FaWindowClose></FaWindowClose>
                  </h3>
                </div>
                <h2>Update Job</h2>
                <hr className="add-job-hr"></hr>
              </div>

              <div className="Job-content">
                <form>
                  <label>
                    {" "}
                    Job Id
                    <input
                      required
                      id="inp"
                      name="jobId"
                      value={jobId}
                      type="text"
                      onChange={(e) => onInputChange(e)}
                    ></input>
                    <button className="post-button" onClick={(e) => getJob(e)}>
                      Get Job!
                    </button>
                    {error ? (
                      <div
                        style={{
                          color: "red",
                          paddingBottom: "15px",
                          paddingLeft: "5px",
                        }}
                      >
                        {error}
                      </div>
                    ) : null}
                  </label>
                </form>
                <label>
                  {" "}
                  position
                  <input
                    required
                    id="inp"
                    name="position"
                    value={position}
                    type="text"
                    onChange={(e) => onInputChange(e)}
                  ></input>
                </label>
                <label> Description</label>
                <textarea
                  required
                  name="Description"
                  value={Description}
                  type="text-area"
                  rows="4"
                  cols="50"
                  onChange={(e) => onInputChange(e)}
                ></textarea>
                <label> Qualifications</label>
                <textarea
                  required
                  name="qualification"
                  value={qualification}
                  type="text-area"
                  rows="4"
                  cols="50"
                  onChange={(e) => onInputChange(e)}
                ></textarea>
                <label>offer</label>{" "}
                <input
                  required
                  name="offer"
                  value={offer}
                  type="text"
                  onChange={(e) => onInputChange(e)}
                ></input>
                <label>
                  {" "}
                  Max Candidtate Number
                  <input
                    required
                    id="inp"
                    name="max_candidate_number"
                    value={max_candidate_number}
                    type="text"
                    onChange={(e) => onInputChange(e)}
                  ></input>
                </label>
                <button className="post-button">Update</button>
              </div>
            </div>
          </form>
        </>
      ) : null}

      {isShown ? <></> : null}
    </div>
  );
}

function Box() {
  return (
    <div>
      <h2>Box</h2>
    </div>
  );
}
