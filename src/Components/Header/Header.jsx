import React from "react";
import "./Header.css";
import headerBg from "../../assets/headerBg.jpg";
import ecell_logo from "../../assets/ecell_logo.png";
import learn from "../../assets/learn.png";
import vvsf from "../../assets/vvsf.png";
import { fontSize } from "@mui/system";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="bgHeader">
        <div className="fgHeadercontainer">
          <div className="fgHeaderContent">
            <div
              className="headerEcellLearn"
              style={{ margin: "30px 0px 0px 0px " }}
            >
              <img src={ecell_logo} alt="" />
              <h3>&</h3>
              <img src={"/learn10x.png"} alt="" />
            </div>
            <div className="headerPrensent">
              <p
                className="d-flex  text-center"
                style={{
                  color: "#FFC71D",
                  marginTop: "8px",
                  justifyContent: "center",
                  fontSize: "22px",
                  fontWeigh: "1000",
                }}
              >
                {" "}
                Celebriting Golden Jublie Of Vidyavardhini's College Of
                Engineering And Technology Trust's
              </p>
              <span>PRESENTS</span>
            </div>
            <div className="headerVvsf text-center">
              <img src={vvsf} alt="" />;
              <p
                className="d-flex  text-center"
                style={{
                  color: "#FFAA03",
                  marginTop: "5px",
                  justifyContent: "center",
                  fontSize: "16px",
                  fontWeigh: "600",
                }}
              >
                VASAI VIRAR START-UP FEST
              </p>
              <p
                className="d-flex  text-center"
                style={{
                  color: "#FFAA03",
                  marginTop: "5px",
                  justifyContent: "center",
                  fontSize: "16px",
                  fontWeigh: "600",
                }}
              ></p>
            </div>
            <div className="hashtag"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
