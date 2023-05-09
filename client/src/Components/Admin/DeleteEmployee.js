import { FaWindowClose } from "react-icons/fa";
import "../../style/Deleteicon.css";
import "../../style/AddJob.css";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
export default function Pop() {
  const enteredvalue = useRef("");
  const [deletejob, setdeletejob] = useState({
    user_id: "",
  });

  // destructing
  const { user_id } = deletejob;
  const onInputChange = (e) => {
    setdeletejob(enteredvalue.current.value);
    console.log("value enterd", deletejob);
  };
  const deleteemployeebtn = async (e) => {
    e.preventDefault();
    await axios
      .delete(`http://localhost:5000/admin/user/${deletejob.user_id}`)
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
        <FaPlus></FaPlus> &nbsp;Delete employee
      </button>

      {/* 👇️ show elements on click */}
      {isShown ? (
        <form onSubmit={(e) => deleteemployeebtn(e)}>
          <div className="add-job-Contianer" id="job">
            <div className="title">
              <div className="close" onClick={handleClick}>
                <h3>
                  <FaWindowClose></FaWindowClose>
                </h3>
              </div>
              <h2>Delete an employee</h2>
              <hr className="add-job-hr"></hr>
            </div>

            <div className="Job-content">
              <label>
                {" "}
                employee id
                <input
                  required
                  id="inp"
                  ref={enteredvalue}
                  name="user_id"
                  value={user_id}
                  type="text"
                  onChange={(e) =>
                    setdeletejob({ ...deletejob, user_id: e.target.value })
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
