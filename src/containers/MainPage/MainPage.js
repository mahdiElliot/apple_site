import React, { Component, Fragment } from "react";
import Header from "../../components/Header/Header";
import Header2 from "../../components/Header2/Header2";
import Header3 from "../../components/Header3/Header3";
import Home from "../../components/Home/Home";

import "./MainPage.css";
import Footer from "../../components/Footer/Footer";

class MainPage extends Component {
  state = {
    openMenu: false,
  };

  escFunction = (event) => {
    if (event.keyCode === 27)
      if (this.state.openMenu) this.setState({ openMenu: false });
  };

  componentDidMount() {
    const handler = (e) => {
      if (!e.matches) this.setState({ openMenu: false });
    };
    window.matchMedia("(max-width: 768px)").addListener(handler);
    document.addEventListener("keydown", this.escFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false);
  }

  menuHandler = () => {
    this.setState((prev) => ({ openMenu: !prev.openMenu }));
  };

  render() {
    const c = this.state.openMenu ? "MainPage" : "";
    return (
      <div className={c}>
        <Header click={this.menuHandler} menu={this.state.openMenu} />
        <Header2 />
        <Header3 />
        <Home />
        <Footer/>
      </div>
    );
  }
}

export default MainPage;
