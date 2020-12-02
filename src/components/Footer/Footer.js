import React, { Component } from "react";
import dollar from "../../assets/dollar.svg";
import delivery from "../../assets/delivery.svg";
import help from "../../assets/help.svg";
import contact from "../../assets/contact.svg";

import "./Footer.css";
import FooterInfoBox from "./FooterInfoBox/FooterInfoBox";
import MainInfo from "./MainInfo/MainInfo";
import MainFooter from "./MainFooter/MainFooter";
import CopyRight from "./CopyRight/CopyRight";
class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="infos">
          <FooterInfoBox
            className="mr-4"
            src={dollar}
            header="Get 3% Daily Cash back with Apple Card"
            link="learn more"
          >
            And pay over time, interest-free when you choose Apple Card Monthly
            Installments.
          </FooterInfoBox>
          <FooterInfoBox
            className="mr-4"
            src={delivery}
            header="Fast, free, no‑contact delivery"
            link="learn more"
          >
            And free returns. See checkout for delivery dates.
          </FooterInfoBox>
          <FooterInfoBox
            className="mr-4"
            src={help}
            header="Get help buying"
            link="contact us"
          >
            Have a question? Call a Specialist or chat online. Call
            1-800-MY-APPLE.
          </FooterInfoBox>
          <FooterInfoBox
            src={contact}
            header="Online Personal Session"
            link="learn more"
          >
            From basics to pro tips, get more out of your new Mac.
          </FooterInfoBox>
        </div>
        <MainInfo className="mt-3" />
        <MainFooter />
        <CopyRight/>
      </footer>
    );
  }
}

export default Footer;
