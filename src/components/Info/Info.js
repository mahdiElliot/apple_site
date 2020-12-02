import React, { Component } from "react";

import brand from "../../assets/brand.jpg";
import { BiChevronRight } from "react-icons/bi";

import "./Info.css";
class Info extends Component {
  render() {
    return (
      <div className={"Info " + this.props.className}>
        <div className="content">
          <p style={{ color: "white" }}>
            <strong>MacBook Pro</strong>
          </p>
          <h1>
            <strong>All systems Pro.</strong>
          </h1>
          <p>
            The Apple M1 chip gives the 13‑inch MacBook Pro speed and power
            beyond belief. With up to 2.8x CPU performance. Up to 5x the
            graphics speed. Our most advanced Neural Engine for up to 11x faster
            machine learning. And up to 20 hours of battery life — the longest
            of any Mac ever. It’s our most popular pro notebook, taken to a
            whole new level.
          </p>

          <div className="brand">
            <img src={brand} />
            <p>Supercharged by the Apple M1 chip</p>
          </div>

          <div className="cost">
            <span>From $1299</span>
            <a>|</a>
            <a href="#">
              Watch the event <BiChevronRight height="8" />{" "}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
