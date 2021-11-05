import "./Intropage.css";
import React from "react";
import img from "../../assets/images/in1.jpg";

export default function IntroPage() {
  return (
    <div id="Intropage">
      <div className="introText">
        <h2 className="sh1">Sample Heading 1</h2>
        <p className="sp1">
          Hoola coola poola. Hocus Pocus. Sample Text. Paragraph. Hello World.
          Hoola coola poola. Hocus Pocus. Sample Text. Paragraph. Hello World.
          Hoola coola poola. Hocus Pocus. Sample Text. Paragraph. Hello World.
          Hoola coola poola. Hocus Pocus. Sample Text. Paragraph. Hello World.
          Hoola coola poola. Hocus Pocus. Sample Text. Paragraph. Hello World.
        </p>
        <br />
        <br />
        <h2 className="sh2">Sample Heading 2</h2>
        <p className="sp2">
          Hoola coola poola. Hocus Pocus. Sample Text. Paragraph. Hello World.
          Hoola coola poola. Hocus Pocus. Sample Text. Paragraph. Hello World.
          Hoola coola poola. Hocus Pocus. Sample Text. Paragraph. Hello World.
        </p>
      </div>
      <div className="introImg">
        <img src={img} alt="" />
      </div>
    </div>
  );
}
