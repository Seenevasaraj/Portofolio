import React from "react";
import lottie from "lottie-web";
import animation from "../assets/63487-programming-computer.json"

export default function Lottie() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#react-logo"),
      animationData:animation,
      loop: true, 
      autoplay: true,

    });
  }, []);

  return (    
    <div style={{ width: 600, height: 600 }} id="react-logo" />
 
  );
}