import React, { Component } from "react";

import "./MainFooter.css";
import Section from "../Section/Section";
import FooterLink from "../FooterLink/FooterLink";
import Section2 from "../Section2/Section2";

class MainFooter extends Component {
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
    console.log(this.state.matches);
    let sections = (
      <div className="sections">
        <Section header="Shop and Learn">
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
        </Section>
        <div>
          <Section header="Shop and Learn">
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
          </Section>
          <Section className="mt-4" header="Shop and Learn">
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
          </Section>
        </div>
        <Section header="Shop and Learn">
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
        </Section>
        <div>
          <Section header="Shop and Learn">
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
          </Section>
          <Section className="mt-4" header="Shop and Learn">
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
          </Section>
          <Section className="mt-4" header="Shop and Learn">
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
          </Section>
          <Section className="mt-4" header="Shop and Learn">
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
          </Section>
        </div>
        <div>
          <Section header="Shop and Learn">
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
          </Section>
          <Section className="mt-4" header="Shop and Learn">
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
          </Section>
        </div>
      </div>
    );
    if (this.state.matches)
      sections = (
        <div className="sections2">
          <Section2 header="Shop and Learn" list={['Mac', 'iPad', 'iPhone']}/>
          <Section2 header="Shop and Learn" list={['Mac', 'iPad', 'iPhone']}/>
          <Section2 header="Shop and Learn" list={['Mac', 'iPad', 'iPhone']}/>
          <Section2 header="Shop and Learn" list={['Mac', 'iPad', 'iPhone']}/>

        </div>
      );
    return (
      <div className="MainFooter">
        <FooterLink />
        {sections}
        <div style={{ textAlign: "left" }}>
          More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
          <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
        </div>
      </div>
    );
  }
}

export default MainFooter;
