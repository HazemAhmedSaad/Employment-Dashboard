import "../../style/AddJob.css";
import { FaPlus } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
// import { getQualification } from "../../../../server/controllers/qualificationController";
// import { updateJob } from "../../../../server/controllers/jobscontroller";
export default function Pop() {
  const [error, setError] = useState("");
  const [addQualification, setAddQualification] = useState({
    qualificationId: "",
    qualification_desc: "",
    qualification: "",
  });

  // destructing
  const { qualificationId, qualification_desc, qualification } =
    addQualification;
  const onInputChange = (e) => {
    setAddQualification({
      ...addQualification,
      [e.target.name]: e.target.value,
    });
  };
  const updateQualificationBtn = async (e) => {
    e.preventDefault();
    await axios
      .put(
        `http://localhost:5000/admin/qualifications/${addQualification.qualificationId}`,
        addQualification
      )
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

  const getQualification = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://localhost:5000/admin/qualifications/${addQualification.qualificationId}`
      )
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          setError("");
          setAddQualification({
            ...addQualification,
            qualification_desc: res.data.qualification_desc,
            qualification: res.data.qualification,
          });
        }
      })
      .catch((err) => {
        if (err) {
          setError("There is no qualificaiton with this id");
        }
      });
  };

  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  return (
    <div>
      <button className="icon-button" onClick={handleClick}>
        <FaPlus></FaPlus> &nbsp;Update Qualification
      </button>

      {/* 👇️ show elements on click */}
      {isShown ? (
        <>
          <form onSubmit={(e) => updateQualificationBtn(e)}>
            <div className="add-job-Contianer" id="job">
              <div className="title">
                <div className="close" onClick={handleClick}>
                  <h3>
                    <FaWindowClose></FaWindowClose>
                  </h3>
                </div>
                <h2>Update Qualification</h2>
                <hr className="add-job-hr"></hr>
              </div>

              <div className="Job-content">
                <form>
                  <label>
                    {" "}
                    Qualification Id
                    <input
                      id="inp"
                      name="qualificationId"
                      value={qualificationId}
                      type="text"
                      onChange={(e) => onInputChange(e)}
                    ></input>
                    <button
                      className="post-button"
                      onClick={(e) => getQualification(e)}
                    >
                      Get Qualification
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

                <label> Qualification</label>
                <textarea
                  required
                  name="qualification"
                  value={qualification}
                  type="text-area"
                  rows="4"
                  cols="50"
                  onChange={(e) => onInputChange(e)}
                ></textarea>
                <label> Qualification Description</label>
                <textarea
                  required
                  name="qualification_desc"
                  value={qualification_desc}
                  type="text-area"
                  rows="4"
                  cols="50"
                  onChange={(e) => onInputChange(e)}
                ></textarea>

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
