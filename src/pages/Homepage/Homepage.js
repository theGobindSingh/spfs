import React from "react";
import "./Homepage.css";

import { Carousel } from "react-carousel-minimal";

import img1 from "../../assets/images/hm1.jpg";
import img2 from "../../assets/images/hm2.jpg";
import img3 from "../../assets/images/hm3.jpg";

export default function Homepage() {
  const imgData = [
    {
      image: img1,
      caption: "Sample Caption 1",
    },
    {
      image: img2,
      caption: "Sample Caption 2",
    },
    {
      image: img3,
      caption: "Sample Caption 3",
    },
  ];
  const imgCaptionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const imgSlideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div id="Homepage">
      <div className="homeText">
        <h1>
          Some Design<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to show off
        </h1>
        <p>
          This is sample text. Hellow World. This is sample text. Hellow World.
        </p>
      </div>
      <div className="homeImg">
        <Carousel
          class="imgCaro"
          data={imgData}
          time={3000}
          captionStyle={imgCaptionStyle}
          radius="10px"
          slideNumber={true}
          slideNumberStyle={imgSlideNumberStyle}
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="black"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          thumbnails={false}
          thumbnailWidth="100px"
          width="300px"
          height="400px"
          style={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            height: "100%",
            width: "auto",
          }}
        />
      </div>
    </div>
  );
}
