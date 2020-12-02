import React, { Component } from "react";

import { BiChevronRight } from "react-icons/bi";

import "./FooterInfoBox.css";

class FooterInfoBox extends Component {
  render() {
    return (
      <div className={"FooterInfoBox " + this.props.className}>
        <img src={this.props.src} width="60" height="60" />
        <p>
          <strong>{this.props.header}</strong>
        </p>
        <p>
          {this.props.children}
        </p>
        <a href="#">{this.props.link}<BiChevronRight/> </a>
      </div>
    );
  }
}

export default FooterInfoBox;
