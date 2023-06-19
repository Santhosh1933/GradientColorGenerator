import React, { useState } from "react";
export const Home = () => {
  const [col1, setCol1] = useState("#c892fe");
  const [col2, setCol2] = useState("#dd8bd8");
  const [orientation, setOrientation] = useState("top");
  const color1 = (e) => {
    setCol1(e.target.value);
    console.log(col1);
    document.querySelector(".Home").style.backgroundImage =
      "linear-gradient(to " + orientation + "," + col1 + ","+col1+"e3,"+col2+"e3," + col2 + ")";
  };
  const color2 = (e) => {
    setCol2(e.target.value);
    console.log(col2);
    document.querySelector(".Home").style.backgroundImage =
    "linear-gradient(to " + orientation + "," + col1 + ","+col1+"e3,"+col2+"e3," + col2 + ")";
  };

  return (
    <div className="Home">
      <div className="home_content">
        <h1>Gradient Generator</h1>
        <p>Choose orientation</p>
        <div className="orientation">
          <i
            class="fa-solid fa-arrow-right"
            onClick={() => {
              setOrientation("right");
              document.querySelector(".Home").style.backgroundImage =
                     "linear-gradient(to " + orientation + "," + col1 + ","+col1+"e3,"+col2+"e3," + col2 + ")";
            }}
          ></i>
          <i
            class="fa-solid fa-arrow-left"
            onClick={() => {
              setOrientation("left");
              document.querySelector(".Home").style.backgroundImage =
              "linear-gradient(to " + orientation + "," + col1 + ","+col1+"e3,"+col2+"e3," + col2 + ")";

            }}
          ></i>
          <i
            class="fa-solid fa-arrow-up"
            onClick={() => {
              setOrientation("top");
              document.querySelector(".Home").style.backgroundImage =
              "linear-gradient(to " + orientation + "," + col1 + ","+col1+"e3,"+col2+"e3," + col2 + ")";

            }}
          ></i>
          <i
            class="fa-solid fa-arrow-down"
            onClick={() => {
              setOrientation("bottom");
              document.querySelector(".Home").style.backgroundImage =
              "linear-gradient(to " + orientation + "," + col1 + ","+col1+"e3,"+col2+"e3," + col2 + ")";
            }}
          ></i>
          <i
            class="fa-solid fa-arrow-down"
            onClick={() => {
              setOrientation("right top");
              document.querySelector(".Home").style.backgroundImage =
              "linear-gradient(to " + orientation + "," + col1 + ","+col1+"e3,"+col2+"e3," + col2 + ")";

            }}
          ></i>
          <i
            class="fa-solid fa-arrow-down"
            onClick={() => {
              setOrientation("right bottom");
              document.querySelector(".Home").style.backgroundImage =
              "linear-gradient(to " + orientation + "," + col1 + ","+col1+"e3,"+col2+"e3," + col2 + ")";

            }}
          ></i>
          <i
            class="fa-solid fa-arrow-down"
            onClick={() => {
              setOrientation("left top");
              document.querySelector(".Home").style.backgroundImage =
              "linear-gradient(to " + orientation + "," + col1 + ","+col1+"e3,"+col2+"e3," + col2 + ")";

            }}
          ></i>
          <i
            class="fa-solid fa-arrow-down"
            onClick={() => {
              setOrientation("left bottom");
              document.querySelector(".Home").style.backgroundImage =
              "linear-gradient(to " + orientation + "," + col1 + ","+col1+"e3,"+col2+"e3," + col2 + ")";

            }}
          ></i>
          <i
            class="fa-solid fa-arrow-rotate-right"
            onClick={() => {
              setOrientation("circle");
              document.querySelector(".Home").style.backgroundImage =
              "radial-gradient(" + orientation + "," + col1 + ","+col1+"e3,"+col2+"e3," + col2 + ")";

            }}
          ></i>
        </div>
        <div className="btn">
          <input type="color" onChange={color1} value={col1}/>
          <input type="color" onChange={color2} value={col2}/>
        </div>
      </div>
    </div>
  );
};
