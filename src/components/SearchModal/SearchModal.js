import React, { Component } from "react";

import close from "../../assets/close.png";
import { BiSearch } from "react-icons/bi";

import "./SearchModal.css";

class Modal extends Component {


  render() {
    const showSearch = this.props.show ? "show" : "hide";
    return (
      <div className={"SearchModal " + showSearch}>
        <form>
          <BiSearch/>
          <input placeholder="Search apple.com" onFocus={this.focusHandler} />
        </form>
        <a className="close" onClick={this.props.onClose}>
          <img src={close} alt="" height="20" width="20" />
        </a>
      </div>
    );
  }
}

export default Modal;
