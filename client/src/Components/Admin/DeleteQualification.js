import { FaWindowClose } from "react-icons/fa";
import "../../style/Deleteicon.css";
import "../../style/AddJob.css";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
export default function Pop() {
  const enteredvalue = useRef("");
  const [deleteQualification, setDeleteQualification] = useState({
    qualificationId: "",
  });

  // destructing
  const { qualificationId } = deleteQualification;

  const deleteQualificationBtn = async (e) => {
    e.preventDefault();
    await axios
      .delete(
        `http://localhost:5000/admin/qualifications/${deleteQualification.qualificationId}`
      )
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
        <FaPlus></FaPlus> &nbsp;Delete Qualification
      </button>

      {/* 👇️ show elements on click */}
      {isShown ? (
        <form onSubmit={(e) => deleteQualificationBtn(e)}>
          <div className="add-job-Contianer" id="job">
            <div className="title">
              <div className="close" onClick={handleClick}>
                <h3>
                  <FaWindowClose></FaWindowClose>
                </h3>
              </div>
              <h2>Delete Qualification</h2>
              <hr className="add-job-hr"></hr>
            </div>

            <div className="Job-content">
              <label>
                {" "}
                Qualification Id
                <input
                  required
                  id="inp"
                  ref={enteredvalue}
                  name="qualificationId"
                  value={qualificationId}
                  type="text"
                  onChange={(e) =>
                    setDeleteQualification({
                      ...deleteQualification,
                      qualificationId: e.target.value,
                    })
                  }
                ></input>
              </label>

              <button className="post-button">Delete now !</button>
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
