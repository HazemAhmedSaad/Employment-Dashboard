import "../../style/AddJob.css";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

import { FaPlus } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import "../../style/AddEmployee.css";
export default function Pop() {
  const [isShown, setIsShown] = useState(false);
  const [addemployee, setaddemployee] = useState({
    name: "",
    Email: "",
    password: "",
    phone: "",
    status: "",
    type: "",
    image_url: "",
    bio: "",
    skill: "",
  });
  // destructing
  const { name, Email, password, phone, status, type, image_url, bio, skill } =
    addemployee;
  const onInputChange = (e) => {
    setaddemployee({ ...addemployee, [e.target.name]: e.target.value });
  };

  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/admin/user", addemployee)
      .then((res) => alert(res.data.msg))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <button className="icon-button" onClick={handleClick}>
        <FaPlus></FaPlus> &nbsp;Add Employee
      </button>

      {/* 👇️ show elements on click */}
      {isShown ? (
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="AddEmployee-Contianer">
            <div className="title">
              <div className="close" onClick={handleClick}>
                <h3>
                  <FaWindowClose></FaWindowClose>
                </h3>
              </div>
              <h2>Add Employee</h2>
              <hr className="add-employee-hr"></hr>
            </div>

            <div className="Job-content">
              {/* <Upload></Upload> */}
              <label>
                {" "}
                name
                <input
                  required
                  id="inp"
                  value={name}
                  name="name"
                  onChange={(e) => onInputChange(e)}
                  type="text"
                ></input>
              </label>

              <label>
                {" "}
                password
                <input
                  required
                  id="inp"
                  value={password}
                  name="password"
                  onChange={(e) => onInputChange(e)}
                  type="password"
                ></input>
              </label>
              <label>
                {" "}
                Email
                <input
                  required
                  id="inp"
                  value={Email}
                  name="Email"
                  onChange={(e) => onInputChange(e)}
                  type=""
                ></input>
              </label>
              <input
                required
                value={image_url}
                id="inp"
                name="image_url"
                onChange={(e) => onInputChange(e)}
                type="file"
                accept="image/*"
              />
              <label>
                {" "}
                Mobile number
                <input
                  required
                  id="inp"
                  value={phone}
                  name="phone"
                  onChange={(e) => onInputChange(e)}
                  type=""
                ></input>
              </label>
              <label>
                {" "}
                Skills
                <input
                  required
                  value={skill}
                  id="inp"
                  name="skill"
                  onChange={(e) => onInputChange(e)}
                  type=""
                ></input>
              </label>
              <label> Bio</label>
              <textarea
                required
                value={bio}
                name="bio"
                id="inp"
                onChange={(e) => onInputChange(e)}
                rows="4"
                cols="30"
              ></textarea>

              <label>
                {" "}
                type
                <input
                  required
                  id="inp"
                  value={type}
                  name="type"
                  onChange={(e) => onInputChange(e)}
                  type="text"
                ></input>
              </label>
              <label>
                {" "}
                status
                <input
                  required
                  id="inp"
                  value={status}
                  name="status"
                  onChange={(e) => onInputChange(e)}
                  type="text"
                ></input>
              </label>

              <button className="add-button">Add now!</button>
            </div>
          </div>
        </form>
      ) : null}

      {isShown ? <></> : null}
    </div>
  );
}
