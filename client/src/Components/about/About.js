import "./about.css";
import Info from "./Info";
import "./about.jpg";
import about from "./about.jpg";
import Skills from "../skills/Skills";
import { Header } from "../shared/Header";
import { Footer } from "../shared/Footer";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios

      .get(
        `http://localhost:5000/applicant/user/${window.sessionStorage.getItem(
          "id"
        )}`
      )
      .then((response) => {
        if (response.data) {
          setData(response.data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);
  return (
    <>
      <Header></Header>
      <div className="about-body">
        <section className="about__section" id="about">
          <div className="name">
            <h1>{data.name}</h1>
          </div>

          <div className="information">
            <img src={about} alt="" className="about__img" />
            <div className="about__data">
              <Info />
              <p className="about__description">
                <li>{data.bio}</li>
              </p>
            </div>
          </div>

          <Skills />
        </section>
      </div>
      <Footer></Footer>
    </>
  );
};
export default About;
