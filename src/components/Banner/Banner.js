import React, { Component } from "react";

import "./Banner.css";

class Banner extends Component {
  render() {
    return (
      <div className="Banner">
          <img width="1200" src={this.props.src} />
      </div>
    );
  }
}

export default Banner;
