import React from "react";
import Card from "../../Container/Card/Card.jsx";
import "./Events.css";
import etalks from "../../assets/events/e-talks.png";
import pitch from "../../assets/events/pitch.png";
import startup from "../../assets/events/startupc.png";


const Events = () => {
  return (
    <div className="eventContainer content-padding" id="events">
      <div className=" text-center section-padding">
        <h1 className="main-title-font text-center" style={{ color: "#fff" }}>
          Events
        </h1>
        <hr
          className="m-auto line-padding"
          style={{ backgroundColor: "#ECF7FF" }}
        />
      </div>{" "}
      <div className="eventsCards content-padding ">
        <Card
          img="/ETalks.png"
          title="E-Talks"
          subtitle="Discover the road that industry professionals took to create a prosperous startup from them. 
Recognize the latest, developing technology across all domains. 
Speaker Profiles: Startup founders, members of the ecosystem, industry wizzards, businesspeople, banks, the government, investors, and many more."
        />
        <Card
          img="/PitchPerfect.png"
          title="Pitch Perfect"
          subtitle="A contest that helps future business leaders put themselves in the position of entrepreneurs and propose a business idea that creatively addresses contemporary problems.
A panel of angel investors and business professionals will hear pitches from people looking for Investments and business prospects. 
"
        />
        <Card
          img="/startUp.png"
          title="Start-Up"
          subtitle="A variety of products and services from entrepreneurs will be on display to introduce the concept of startups to students. 
Oppourtunity to network and interact with the founders and the co-founders. 

Domains: Tech, Food, manufacture, sports and fitness, household, clothing and many more"
        />
      </div>
    </div>
  );
};

export default Events;
