import { useEffect, useState } from "react";
import axios from "axios";
import "../requetedjobs/Tables";
const INITIAL_STATE = [
  {
    applicantname: "",
    userStatus: "",
    position: "",
    status: "",
    date: "",
  },
];

const capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1);
};

function Table() {
  const [jobs, setJobs] = useState([]);
  const [requests, setRequests] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/request")
      .then((response) => {
        if (response.data) {
          setRequests(response.data);

          response.data.forEach((element) => {
            axios
              .get(`http://localhost:5000/admin/jobs/${element.job_id}`)
              .then((response) => {
                if (response.data) {
                  setJobs((oldData) => [...oldData, response.data]);
                }
              });
            axios
              .get(`http://localhost:5000/admin/user/${element.user_id}`)
              .then((response) => {
                if (response.data) {
                  setUsers((oldData) => [...oldData, response.data]);
                }
              });
          });
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const accept = (e, job_id, user_id) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/admin/request/${user_id}&${job_id}`, {
        response: "approved",
      })
      .then((res) => {
        alert(res.data.msg);
      });
  };
  const decline = (e, job_id, user_id) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/admin/request/${user_id}&${job_id}`, {
        response: "declined",
      })
      .then((res) => alert(res.data.msg));
  };

  const renderUsers = () => {
    return requests.map(({ job_id, user_id, response, date, userStatus }) => {
      let flag = true;
      const job = jobs?.filter((elem) => {
        if (elem[0].job_id === job_id && flag) {
          console.log(elem[0]);
          flag = false;
          return true;
        }

        return false;
      });
      flag = true;
      const user = users.filter((elem) => {
        if (elem[0].user_id === user_id && flag) {
          flag = false;
          return true;
        }
        return false;
      });
      return (
        <tr key={job_id}>
          <td style={{ padding: "10px", border: "1px solid black" }}>
            {user[0] ? user[0][0].name : ""}
          </td>
          <td style={{ padding: "10px", border: "1px solid black" }}>
            {user[0] ? user[0][0].status : ""}
          </td>
          <td style={{ padding: "10px", border: "1px solid black" }}>
            {job[0] ? job[0][0].position : ""}
          </td>
          <td style={{ padding: "10px", border: "1px solid black" }}>
            {response}
          </td>
          <td style={{ padding: "10px", border: "1px solid black" }}>{date}</td>
          <td className="btns">
            <button
              className="accept-button"
              onClick={(e) => accept(e, job_id, user_id)}
            >
              Accept
            </button>
            <button
              className="decline-button"
              onClick={(e) => decline(e, job_id, user_id)}
            >
              Decline
            </button>
          </td>
        </tr>
      );
    });
  };

  const renderHeader = () => {
    return (
      <tr className="table-header">
        {Object.keys(INITIAL_STATE[0]).map((key) => (
          <th>{capitalize(key)}</th>
        ))}
      </tr>
    );
  };

  return (
    <table id="table">
      {renderHeader()}
      <tbody>{renderUsers()}</tbody>
    </table>
  );
}

export default Table;
