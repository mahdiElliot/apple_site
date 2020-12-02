import React, { Component } from "react";

import logo from "../../assets/apple.svg";
import shop from "../../assets/shop.svg";
import menu from "../../assets/menu.png";
import close from "../../assets/close.png";

import Modal from "../SearchModal/SearchModal";
import { BiSearch } from "react-icons/bi";

import "./Header.css";
import Backdrop from "../Backdrop/Backdrop";

class Header extends Component {
  state = {
    openSearch: false,
    focus: false,
  };

  escFunction = (event) => {
    if (event.keyCode === 27) {
      if (this.state.openSearch) this.setState({ openSearch: false });
    }
  };

  componentDidMount() {
    const handler = (e) => {
      if (e.matches) this.setState({ openSearch: false });
    };
    window.matchMedia("(max-width: 768px)").addListener(handler);
    document.addEventListener("keydown", this.escFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false);
  }

  searchHandler = () => {
    this.setState((prev) => ({ openSearch: !prev.openSearch }));
  };

  focusHandler = () => {
    this.setState({ focus: false });
  };

  blurHandler = () => {
    this.setState({ focus: true });
  };

  render() {
    const show = this.props.menu ? "show" : "hide";
    const focus = this.state.focus ? "formBorder" : "";
    const showShop = !this.props.menu ? "show" : "hide";

    let menuIcon = (
      <a className="side">
        <img src={menu} alt="menu" onClick={this.props.click} />
      </a>
    );
    if (this.props.menu)
      menuIcon = (
        <a className="side">
          <img src={close} alt="close" onClick={this.props.click} />
        </a>
      );
    let menuList = (
      <div className={"menu " + show}>
        <form className={"form " + focus}>
          <BiSearch className="icon" />
          <input
            placeholder="Search apple.com"
            onBlur={this.blurHandler}
            onFocus={this.focusHandler}
          />
        </form>
        <ul>
          <li>
            <a href="#">Mac</a>
          </li>
          <li>
            <a href="#">iPad</a>
          </li>
          <li>
            <a href="#">iPhone</a>
          </li>
          <li>
            <a href="#">Watch</a>
          </li>
          <li>
            <a href="#">TV</a>
          </li>
          <li>
            <a href="#">Music</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </div>
    );

    const showAll = this.state.openSearch ? "hide2" : "show2";

    return (
      <header>
        <div className={"Header " + showAll}>
          {menuIcon}
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
          <nav>
            <a href="#">Mac</a>
            <a href="#">iPad</a>
            <a href="#">iPhone</a>
            <a href="#">Watch</a>
            <a href="#">TV</a>
            <a href="#">Music</a>
            <a href="#">Support</a>
            <a className="search" onClick={this.searchHandler}>
              <BiSearch className="icon" />
            </a>
          </nav>
          <a href="#" className={"shop " + showShop}>
            <img src={shop} alt="basket" height="32" width="32" />
          </a>
        </div>
        <Modal show={this.state.openSearch} onClose={this.searchHandler} />
        <Backdrop show={this.state.openSearch} onClose={this.searchHandler} />
        {menuList}
      </header>
    );
  }
}

export default Header;
