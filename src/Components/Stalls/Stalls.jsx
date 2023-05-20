import React from "react";

const Stalls = () => {
  return (
    <div className="stallsContainer">
      <div className=" text-center section-padding">
        <h1 className="main-title-font text-center" style={{ color: "#fff" }}>
          Start-Up Street
        </h1>
        <hr
          className="m-auto line-padding"
          style={{ backgroundColor: "#ECF7FF" }}
        />
      </div>
      <div
        className="container  content-padding section-padding startupContainer"
        style={{
          listStyleType: "circle",
          padding: "0px 30px ",
          color: "white",
          fontSize: "23px",
          fontFamily: "Roboto",
        }}
      >
        <ul>
          <li style={{ listStyleType: "square" }}>
            <p>Stalls With table</p>
          </li>
          <li style={{ listStyleType: "square" }}>
            {" "}
            <p> Hospitality will be taken care of for the entire event </p>{" "}
          </li>
          <li style={{ listStyleType: "square" }}>
            <p>Maximum of 2 people per stalls</p>
          </li>
          <li style={{ listStyleType: "square" }}>
            <p>Make lasting connection during networking session</p>
          </li>
          <li style={{ listStyleType: "square" }}>
            <p>
              Get acess to innovative and evolutionary startups from all over
              Mumbai
            </p>
          </li>
          <li style={{ listStyleType: "square" }}>
            <p>
              Connect with over 3000+ attendies from startups, established
              companies startups over hte Mumbai region
            </p>
          </li>
          <li style={{ listStyleType: "square" }}>
            <p>Expand Knowledge through seminars annd pitches </p>
          </li>
          <li style={{ listStyleType: "square" }}>
            <p>Get acess to potential investors and customers and many more</p>
          </li>
        </ul>
      </div>
      <div className="priceContainer   px-30    container content-padding">
        <h1
          style={{
            color: "white",
            padding: "0px 15px ",
            fontFamily: "poppins , Roboto",
            fontSize: "30px",
          }}
          className="text-left  "
        >
          Price = ₹5000{" "}
        </h1>
        {/* <hr style={{backgroundColor: "white" ,  height: "12px"}}/> */}
        {/* <button className="btn  btn-primary text-xl " style={{height: "5rem" , width: "15rem", margin:"10px", fontSize: "18px" , fontWeight:"600"}}>Register Here</button> */}
      </div>

      {/* <div className="formLinkContainer">
      </div> */}
    </div>
  );
};

export default Stalls;
