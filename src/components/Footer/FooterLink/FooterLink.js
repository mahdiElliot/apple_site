import React, { Component } from "react";

import logo from "../../../assets/apple.svg";
import { BsChevronRight } from "react-icons/bs";

import "./FooterLink.css";

class FooterLink extends Component {
  render() {
    return (
      <div className="FooterLink">
        <a href="#">
          <img src={logo} width="30" height="30" />
        </a>
        <ul>
          <li>
            <BsChevronRight color="#6e6e73" />{" "}
          </li>
          <li>
            <a href="#">Mac</a>
          </li>
          <li>
            <BsChevronRight color="#6e6e73" />{" "}
          </li>
          <li>
            <a href="#">MacBook Pro</a>
          </li>
          <li>
            <BsChevronRight color="#6e6e73" />{" "}
          </li>
          <li>
            <a href="#">MacBook Pro 13-inch</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default FooterLink;
