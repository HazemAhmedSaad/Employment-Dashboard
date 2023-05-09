import "./requested.css";
import { Header } from "../shared/Header";
import { Footer } from "../Components/shared/Footer";

import "./requested.css";
import Tables from "./Tables";

const Requested = () => {
  return (
    <>
      <Header></Header>
      <div className="request-body">
        <Tables></Tables>
        <div className="div-footer">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default Requested;
