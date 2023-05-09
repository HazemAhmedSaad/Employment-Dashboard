import "../../style/Dashboard.css";
import { FaPlus } from "react-icons/fa";
import DeleteEmployee from "../Admin/DeleteEmployee";
import DeleteQualification from "../Admin/DeleteQualification";
import AddQualification from "../Admin/AddQualification";
import UpdateQualification from "../Admin/UpdateQualification";
import UpdateJob from "../Admin/UpdateJob";
import UpdateEmployee from "../Admin/UpdateEmployee";
import Table from "../Table";
import Image from "../../assets/images/t2.avif";
import { Footer } from "../shared/Footer";
import { Button } from "../Home/LgnButton";
import NotificationButton from "../NotificationButton";
import DeleteJob from "../Admin/DeleteJob";
import AddJob from "./AddJob";
import AddEmployee from "../Admin/AddEmployee";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const win = window.sessionStorage;
    if (!win.getItem("auth")) {
      if (win.getItem("type") !== "admin") navigate("/");
      navigate("/login");
    }
  }, []);
  return (
    <>
      <nav className="admin-nav">
        <div className="main-container">
          <div className="title-container">
            <h4>Admin Dashboard</h4>
          </div>
          <div className="mini-control"></div>
          <Button></Button>
        </div>
      </nav>
      <div
        style={{
          backgroundImage: `url(${Image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 610,
          marginBottom: -50,
        }}
      ></div>
      <div className="sub-mini-control">
        {/* <Search></Search> */}
        <AddJob href="#">
          <FaPlus></FaPlus>
        </AddJob>
        <DeleteJob>
          <FaPlus></FaPlus>
        </DeleteJob>
        <UpdateJob>
          <FaPlus></FaPlus>
        </UpdateJob>
        <AddEmployee href="#">
          <FaPlus></FaPlus>
        </AddEmployee>
        <DeleteEmployee>
          <FaPlus></FaPlus>
        </DeleteEmployee>
        <UpdateEmployee>
          <FaPlus></FaPlus>
        </UpdateEmployee>
        <AddQualification>
          <FaPlus></FaPlus>
        </AddQualification>
        <DeleteQualification>
          <FaPlus></FaPlus>
        </DeleteQualification>
        <UpdateQualification>
          <FaPlus></FaPlus>
        </UpdateQualification>
      </div>

      <Table></Table>

      <Footer></Footer>
    </>
  );
};
