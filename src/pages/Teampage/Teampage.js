import "./Teampage.css";
import React from "react";

import img1 from "../../assets/images/team1.png";
import img2 from "../../assets/images/team2.jpg";
import img3 from "../../assets/images/team3.jpeg";

export default function Teampage() {
  return (
    <div id="Teampage">
      <div className="team row _1">
        <div className="teamIntro">
          <p className="p1">
            Sample Text this is team section. Oola Koola Poola. Hello world.
            This is team head. Sample Text this is team section. Oola Koola
            Poola. Hello world. This is team head.
          </p>
          <p className="p2">
            Something catchy. Or maybe important stuff. I don't know. Sample
            text. lol means laugh out loud.
          </p>
        </div>
        <div className="teamMainImg">
          <img src={img1} alt="" />
        </div>
      </div>
      <div className="team row _2">
        <div className="mem _1">
          <div className="memImgCont">
            <img src={img2} alt="" />
          </div>
          <h2>Lady One</h2>
          <p>
            Some important stuff about this important lady. Not to be joked or
            taken lightly. Damn this is getting serious. Sample Text. Hello
            World. ROFL is rolling on floor laughing.
          </p>
        </div>
        <div className="mem _2">
          <div className="memImgCont">
            <img src={img3} alt="" />
          </div>
          <h2>Lady two</h2>
          <p>
            Some important stuff about this important lady. Not to be joked or
            taken lightly. Damn this is getting serious. Sample Text. Hello
            World. ROFL is rolling on floor laughing.
          </p>
        </div>
      </div>
    </div>
  );
}
