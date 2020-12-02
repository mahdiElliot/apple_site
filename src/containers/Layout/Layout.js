import React, { Fragment } from "react";

const Layout = (props) => (
  <Fragment>
    <div></div>
    <main className="Layout">{props.children}</main>
  </Fragment>
);

export default  Layout;
