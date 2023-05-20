import React from "react";
import "./Pitches.css";

const Pitches = () => {
  return (
    <div className="content-padding pitchesContainer" data-aos="zoom-in">
      <div className=" text-center section-padding">
        <h1 className="main-title-font text-center" style={{ color: "#fff" }}>
          Team Heads
        </h1>
        <hr
          className="m-auto line-padding"
          style={{ backgroundColor: "#ECF7FF" }}
        />
      </div>{" "}
      <div className="carouselTeamHead   ">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <img
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item  ">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item ">
              <img
                src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item ">
              <img
                src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  //   <div class="wrapper">
  //   <h1>Parallax Flipping Cards</h1>
  //   <div class="cols">
  //       <div class="col" ontouchstart="this.classList.toggle('hover');">
  //         <div class="container">
  //           <div class="front" style="background-image: url(https://unsplash.it/500/500/)">
  //             <div class="inner">
  //               <p>Diligord</p>
  //               <span>Lorem ipsum</span>
  //             </div>
  //           </div>
  //           <div class="back">
  //             <div class="inner">
  //               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="col" ontouchstart="this.classList.toggle('hover');">
  //         <div class="container">
  //           <div class="front" style="url(https://unsplash.it/511/511/)">
  //             <div class="inner">
  //               <p>Rocogged</p>
  //               <span>Lorem ipsum</span>
  //             </div>
  //           </div>
  //           <div class="back">
  //             <div class="inner">
  //               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="col" ontouchstart="this.classList.toggle('hover');">
  //         <div class="container">
  //           <div class="front" style="background-image: url(https://unsplash.it/502/502/)">
  //             <div class="inner">
  //               <p>Strizzes</p>
  //               <span>Lorem ipsum</span>
  //             </div>
  //           </div>
  //           <div class="back">
  //             <div class="inner">
  //               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="col" ontouchstart="this.classList.toggle('hover');">
  //         <div class="container">
  //           <div class="front" style="background-image: url(https://unsplash.it/503/503/)">
  //             <div class="inner">
  //               <p>Clossyo</p>
  //               <span>Lorem ipsum</span>
  //             </div>
  //           </div>
  //           <div class="back">
  //             <div class="inner">
  //               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="col" ontouchstart="this.classList.toggle('hover');">
  //         <div class="container">
  //           <div class="front" style="background-image: url(https://unsplash.it/504/504/">
  //             <div class="inner">
  //               <p>Rendann</p>
  //               <span>Lorem ipsum</span>
  //             </div>
  //           </div>
  //           <div class="back">
  //             <div class="inner">
  //               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="col" ontouchstart="this.classList.toggle('hover');">
  //         <div class="container">
  //           <div class="front" style="background-image: url(https://unsplash.it/505/505/)">
  //             <div class="inner">
  //               <p>Reflupper</p>
  //               <span>Lorem ipsum</span>
  //             </div>
  //           </div>
  //           <div class="back">
  //             <div class="inner">
  //               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="col" ontouchstart="this.classList.toggle('hover');">
  //         <div class="container">
  //           <div class="front" style="background-image: url(https://unsplash.it/506/506/)">
  //             <div class="inner">
  //               <p>Acirassi</p>
  //               <span>Lorem ipsum</span>
  //             </div>
  //           </div>
  //           <div class="back">
  //             <div class="inner">
  //               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="col" ontouchstart="this.classList.toggle('hover');">
  //         <div class="container">
  //           <div class="front" style="background-image: url(https://unsplash.it/508/508/)">
  //             <div class="inner">
  //               <p>Sohanidd</p>
  //               <span>Lorem ipsum</span>
  //             </div>
  //           </div>
  //           <div class="back">
  //             <div class="inner">
  //               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //  </div>
  );
};

export default Pitches;
