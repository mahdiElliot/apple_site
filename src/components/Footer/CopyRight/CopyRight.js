import React, { Component } from "react";

import "./CopyRight.css";

class CopyRight extends Component {
  state = {
    matches: window.matchMedia("(max-width: 768px)").matches,
  };

  componentDidMount() {
    const handler = (e) => {
      this.setState({ matches: e.matches });
    };
    window.matchMedia("(max-width: 768px)").addListener(handler);
  }

  render() {
    let details = (
      <div className="CopyRight">
        <p>Copyright © 2020 Apple Inc. All rights reserved.</p>
        <div className="terms">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">States and Refunds</a>
          <a href="#">Legal</a>
          <a href="#">Site Map</a>
        </div>
        <a href="#">United States</a>
      </div>
    );

    if (this.state.matches)
      details = (
        <div className="CopyRight">
          <a href="#">United States</a>
          <p>Copyright © 2020 Apple Inc. All rights reserved.</p>
          <div className="terms">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">States and Refunds</a>
            <a href="#">Legal</a>
            <a href="#">Site Map</a>
          </div>
        </div>
      );
    return details;
  }
}

export default CopyRight;
