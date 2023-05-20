import React from 'react'
import "./Card.css"
import etalks from "../../assets/events/e-talks.png"

const Card = (props ) => {
    return (
        <div data-aos="flip-left" >
            
        <div className="card cardContainer" >
            <img style={{padding : "40px" , maxHeight : "parent" , maxWidth : "parent"}} src={`${props.img}`} alt="..." />
                <div className="card-body">
                    <h5 style={{fontWeight: "700"}} className="card-title">{props.title}</h5>
                    <p className="card-text">{props.subtitle}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
        </div>
        </div>


    )
}

export default Card
