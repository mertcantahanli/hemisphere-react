import React from "react";
import "./hemisphere.css";
import nth from "./img/nth-hemisphere.jpg";
import sth from "./img/sth-hemisphere.jpg";

const hemisphereConfig = {
  Nothern: {
    text: "it is Nothern Hemisphere ",
    picture: nth,
  },
  Southern: {
    text: "it is Southern Hemisphere ",
    picture: sth,
  },
};

const HemisphereDisplay = ({ latitude }) => {
  const hemisphere = latitude > 0 ? "Nothern" : "Southern";
  const { text, picture } = hemisphereConfig[hemisphere];
  return (
    <div className={hemisphere}>
      <img src={picture} alt="hemisphere" className="picture" />
      {text}
    </div>
  );
};

export default HemisphereDisplay;
