import React, { Component } from "react";

import head from "../../assets/apple-header.png";

import { BiChevronRight } from "react-icons/bi";

import "./Info2.css";

class Info2 extends Component {
  render() {
    return (
      <div className={"Info2 " + this.props.className}>
        <div>
          <img src={head} />
          <h1>
            <strong>Small chip. Giant leap.</strong>
          </h1>
          <p>
            It’s here. Our first chip designed specifically for Mac. Packed with
            an astonishing 16 billion transistors, the Apple M1 system on a chip
            (SoC) integrates the CPU, GPU, Neural Engine, I/O, and so much more
            onto a single tiny chip. With incredible performance, custom
            technologies, and industry-leading power efficiency,1 M1 is not just
            a next step for Mac — it’s another level entirely.
          </p>
          <a href="#">Learn more about M1 <BiChevronRight/> </a>
        </div>
      </div>
    );
  }
}

export default Info2;
