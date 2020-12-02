import React, { Component } from "react";

import mac from "../../assets/mac.mp4";

import "./Box.css";

class Box extends Component {
  componentDidMount() {
    const video = document.getElementById("boxVid");
    video.play();
  }

  render() {
    return (
      <div className="Box">
        <video id="boxVid">
          <source src={mac} type="video/mp4" />
        </video>
        <div className="content">
          <div>
            <p>GPU</p>
          </div>
          <div className="center">
            <div className="intro">
              <h1>
                <strong>Creates beauty like a beast.</strong>
              </h1>
              <p>
                The 8-core GPU in M1 is the most advanced graphics processor
                we’ve ever built. Period. And it brings the world’s fastest
                integrated graphics in a personal computer,7 delivering a
                ridiculous 5x boost in graphics horsepower.
              </p>
            </div>
            <div className="extra">
              <div className="intro2">
                <h1>
                  <strong>8-core</strong>
                </h1>
                <p>GPU</p>
              </div>
              <div className="intro3">
                <p>Up to</p>
                <h1>
                  <strong>5X</strong>
                </h1>
                <p>
                  <strong>faster graphics performance8</strong>
                </p>
              </div>
            </div>
          </div>
          <div>
            <button>see how M1 revs up graphics</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Box;
