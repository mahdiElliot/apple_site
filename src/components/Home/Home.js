import React, { Component } from "react";

import Banner from "../Banner/Banner";
import pic from "../../assets/laptop.jpg";

import "./Home.css";
import Info from "../Info/Info";
import Info2 from "../Info2/Info2";
import apple from "../../assets/apple.mp4";
import Box from "../Box/Box";

class Home extends Component {
  componentDidMount() {
    const video = document.getElementById("vid");
    video.play();
  }

  render() {
    return (
      <div className="Home">
        <Banner src={pic} />
        <div>
          <div className="Infos">
            <Info />
            <Info2 className="product-info" />
            <video id="vid">
              <source src={apple} type="video/mp4" />
            </video>
          </div>
          <Box />
        </div>
      </div>
    );
  }
}

export default Home;
