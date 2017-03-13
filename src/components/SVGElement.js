
import React, { Component } from 'react';

class SVGElement extends Component {

    // constructor(props) {
    //     super(props);
    // }

    state = {  }
    render() {
        return (
            <svg {...this.props} xmlns="http://www.w3.org/2000/svg">
                {this.props.children}
            </svg>
        );
    }
}

export default SVGElement;