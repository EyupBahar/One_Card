import React from "react";
import "./Card.css";
import lorem from "./lorem-ipsum.png";

function Card() {
  return (
    <div id="main">
      <div className="content">
        <div className="img">
          <img src={lorem} alt="lorem" />
          <div className="letters">
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui nemo
              nihil vitae sint, eaque alias vel repellendus asperiores
              perferendis culpa ipsam magni,Quod voluptas aliquid delectus
              mollitia!
            </p>
          </div>
          <a href="#">VIEW CONTACT</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
