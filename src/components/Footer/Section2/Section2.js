import React, { Component } from "react";
import Transition from "react-transition-group/Transition";
import { BiPlus } from "react-icons/bi";

import "./Section2.css";

class Section2 extends Component {
  state = {
    openMenu: false,
  };

  menuHandler = () => {
    this.setState((prev) => ({ openMenu: !prev.openMenu }));
  };

  render() {
    const rotate = this.state.openMenu ? "rotate" : "";

    const list = (
      <Transition in={this.state.openMenu} mountOnEnter unmountOnExit>
        {(state) => {
          let time = "0.3s";
          let op = 1;
          if (state === "entering") op = 0;
          if (state === "exiting" || state === "exited") {
            time = "0s";
            op = 0;
          }
          const s = {
            transition: "all " + time + " linear",
            transform:
              state === "entered" ? "translateY(0)" : "translateY(-100%)",
            opacity: op,
          };
          return (
            <ul>
              {this.props.list.map((item, i) => (
                <li style={s} key={i}>
                  {item}
                </li>
              ))}
            </ul>
          );
        }}
      </Transition>
    );

    return (
      <div className="Section2" onClick={this.menuHandler}>
        <div className="inside">
          <a>{this.props.header}</a>
          <BiPlus className={rotate} />
        </div>
        {list}
      </div>
    );
  }
}

export default Section2;
