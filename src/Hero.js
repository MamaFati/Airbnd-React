import React from "react";
import group from './Group 77.png';

function Hero(){
    return(
         <section>
            <div className="sec">
                <img src = {group} className = "group" alt=" group" />
                <div className ="main">
                <h1> Online Experiences</h1>
                <p>Join unique interactice activities led by ,<br/>
                    One-of-a kind host-all without leaving <br/>
                    home</p>
                </div>
            </div>
         </section>
    )
}
export default Hero;