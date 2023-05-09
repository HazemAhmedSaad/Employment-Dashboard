import "../../style/Search.css";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
export const Search = () => {
  const navigate = useNavigate();
  const win = window.sessionStorage;
  if (win.getItem("auth")) {
    navigate("/");
  }
  const [jobs, setJobs] = useState([]);
  const searchValue = useRef("");
  var x = 0;
  const searchResult = (e) => {
    e.preventDefault();
    if (searchValue.current.value === "") {
      alert("please enter a value");
    } else {
      x++;
      navigate("/find", { state: { id: x, data: searchValue.current.value } });
      const searchedJobs = jobs.filter((value) => {
        if (value.companyName === searchValue.current.value) {
          return true;
        }
        return false;
      });
      setJobs(searchedJobs);
    }
  };

  return (
    <>
      <form className="example" action="">
        <input
          className="main-search"
          type="text"
          placeholder="Search for a job now!"
          name="search"
          ref={searchValue}
        />
        <button onClick={searchResult} type="submit">
          <i className=""></i>
          <FaSearch></FaSearch>
        </button>
      </form>
    </>
  );
};
