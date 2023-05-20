import { useState } from "react";
import "./Carousel.css";

function Carousel() {
  const buttons = document.querySelectorAll("[data-carousel-button]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1;
      const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]");

      const activeSlide = slides.querySelector("[data-active]");
      let newIndex = [...slides.children].indexOf(activeSlide) + offset;
      if (newIndex < 0) newIndex = slides.children.length - 1;
      if (newIndex >= slides.children.length) newIndex = +1;

      slides.children[newIndex].dataset.active = true;
      delete activeSlide.dataset.active;
    });
  });

  return (
    <>
      <div>
      <div className=" text-center section-padding">
        <h1 className="main-title-font text-center" style={{ color: "#fff" }}>
          Team Heads
        </h1>
        <hr
          className="m-auto line-padding"
          style={{ backgroundColor: "#ECF7FF" }}
        />
      </div>{" "}
        <section aria-label="Newest Photos" className="m-auto">
          <div className="carousel m-auto" data-carousel>
            <button
              className="carousel-button prev"
              data-carousel-button="prev"
            >
              &#8656;
            </button>
            <button
              className="carousel-button next"
              data-carousel-button="next"
            >
              &#8658;
            </button>
            <ul data-slides>
              <li className="slide" data-active>
                <img src="/first.jpg" alt="Nature Image #1" />
              </li>
              <li className="slide" data-active>
                <img src="/forth.jpg" alt="Nature Image #1" />
              </li>
              <li className="slide">
                <img src="/second.jpg" alt="Nature Image #2" />
              </li>
              {/* <li className="slide">
                <img src="/third.jpg" alt="Nature Image #3" />
              </li> */}

             
          
            
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default Carousel;
