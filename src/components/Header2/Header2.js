import React, { Component } from "react";

import "./Header2.css";

class Header2 extends Component {
  render() {
    return (
      <div className="Header2">
        <div className="inside">
          <div>
            <a href="#" style={{textDecoration: "none", fontSize: "160%"}}><strong>MacBookPro 13"</strong></a>
          </div>
          <div className="right">
            <a href="#">overview</a>
            <a href="#">tech</a>
            <button>Buy</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header2;
