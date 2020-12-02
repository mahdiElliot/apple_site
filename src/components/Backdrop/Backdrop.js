import React, {Component} from 'react';

import './Backdrop.css';

class Backdrop extends Component{

    render(){
        const show = this.props.show ? "open" : "close";
        return(
            <div className={"Backdrop " + show} onClick={this.props.onClose}></div>
        );
    }
}

export default Backdrop;