import React, { Component } from "react";

import "./Section.css";

class Section extends Component{

    render(){
        return(
            <div className={"Section " + this.props.className}>
                <p>{this.props.header}</p>
                <ul>
                    {this.props.children}
                </ul>
            </div>
        );
    }
}

export default Section;