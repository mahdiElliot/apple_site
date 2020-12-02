import React, { Component } from "react";
import Layout from "./containers/Layout/Layout";
import MainPage from "./containers/MainPage/MainPage";
import './App.css';

class App extends Component {
  render() {
    return (
        <Layout>
          <MainPage/>
        </Layout>
    );
  }
}

export default App;
