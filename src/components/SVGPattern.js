
import React, { Component } from 'react';

class SVGPattern extends Component {

    render() {

        let xx = parseInt(this.props.something, 10);
        
        let elems = this.props.data.map((elem) => {
            if (elem.type === "rect")
                return <rect key={ elem.id } {...elem} className="svg-pattern-elem" />
            else if (elem.type === "circle")
                return <circle key={ elem.id } cy={ elem.cy + xx } cx={ elem.cx } r={ elem.r } fill={ elem.fill } className="svg-pattern-elem" />
            else 
                return <g></g>;
        });

        return (
            <pattern 
                id={ this.props.id } x={this.props.x} y={this.props.y} width={ this.props.width } 
                height={ this.props.height } patternUnits={this.props.patternUnits} >
                
                <g>
                    {elems}
                </g>
            </pattern>
        );
    }
}

export default SVGPattern;