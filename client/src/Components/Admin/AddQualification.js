import "../../style/AddJob.css";
import { FaPlus } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
export default function Pop() {
  const [addQualification, setAddQualification] = useState({
    qualification_desc: "",

    qualification: "",
  });

  // destructing
  const {
    qualification_desc,

    qualification,
  } = addQualification;
  const onInputChange = (e) => {
    setAddQualification({
      ...addQualification,
      [e.target.name]: e.target.value,
    });
  };
  const addQualificationbtn = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/admin/qualifications", addQualification)
      .then((res) => alert(res.data.msg))
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
        <FaPlus></FaPlus> &nbsp;Add Qualification
      </button>

      {/* 👇️ show elements on click */}
      {isShown ? (
        <form onSubmit={(e) => addQualificationbtn(e)}>
          <div className="add-job-Contianer" id="job">
            <div className="title">
              <div className="close" onClick={handleClick}>
                <h3>
                  <FaWindowClose></FaWindowClose>
                </h3>
              </div>
              <h2>Add Qualification</h2>
              <hr className="add-job-hr"></hr>
            </div>

            <div className="Job-content">
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

              <button className="post-button">ADD</button>
            </div>
          </div>
        </form>
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
