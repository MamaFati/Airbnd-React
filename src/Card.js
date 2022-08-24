import React from "react";
import star1 from "./Star 1-1.png";
 
function Card(props){
    return(
        <section className="section1">
            <div>
                 
                <img src= {props.image}alt ="" className ="image1"/>
                 
                <div>
                    <div className="star">
                        <button className ='btn'> {props.text} </button>
                        <div className = 'star-1'>
                            <img src= {star1} alt =""  className="myStar"/> 
                            <span  >{props.rating} </span>
                            <span className ='color'> {props.reviewcount} </span>
                            <span className ='color'> {props.country} </span>

                        </div>
                        
                        
                        <p> {props.title} <br/>
                            <span className = "dollar">From $ {props.price }</span> / person 
                        </p>
                    </div>
                </div>
            </div>
             
        </section>
    )
}
export default Card;