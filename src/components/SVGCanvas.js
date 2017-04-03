/* 
SVG working canvas component
*/

import React, { Component } from 'react';
import FileSaver from 'file-saver';
// import ReactResizeDetector from 'react-resize-detector';

import SVGElement from './SVGElement';
import SVGPattern from './SVGPattern';

import '../css/SVGCanvas.css';

class SVGCanvas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
            something: 0
            // gridCoords: [],
            // elemSize: 1,
            // gridGap: 1
        }

        // testing purposes only
        // @todo: replace with real data binding, using API, nedb or something
        // first in array is background!
        this.data = [
            { id: "svg-rect-1", type: "rect", x: 0, y: 0, width: 100, height: 100, fill: "#84A59D" },
            { id: "svg-rect-2", type: "rect", x: 0, y: 0, width: 25, height: 25, fill: "#FFF1D0" },
            { id: "svg-rect-3", type: "circle", cx: 25, cy: 25, r: 20, fill: "#DD1C1A"}
        ];
    }

    componentWillMount() {
        document.addEventListener("keydown", this.handleKeyDown, false);
    }

    componentDidMount() {
        const height = document.getElementById('svgCanvas').clientWidth;
        const width = document.getElementById('svgCanvas').clientHeight;
        this.setState({
            width: width,
            height: height
        });

        // let gridGap = 20;
        // let elemSize = 30;
        // this.setState({ elemSize: elemSize, gridGap: gridGap });

        // let gridCoords = [];
        // // @todo: should round always up? 
        // let stopW = Math.round(width / (elemSize + gridGap));
        // let stopH = Math.round(height / (elemSize + gridGap));
        
        // console.log(stopW);
        // console.log(stopH);
        
        // for (let i = 0; i < stopH; i++) {
        //     for (let j = 0; j < stopW; j++) {
        //         gridCoords.push({ x: elemSize + (j * 2 * elemSize + j * gridGap), y: elemSize + (i * 2 * elemSize + i * gridGap)});
        //     }
        // }

        // console.log(gridCoords);
        // this.setState({ gridCoords: gridCoords });
    }

    onResize = (width, height) => {
        // console.log(width);
        this.setState({ 
            width: width,
            height: height 
        });
    }

    handleKeyDown = (event) => {

        if (event.key === 's') {
            
            /**
             * @todo: save only one piece of svg, add file save dialog and so on
             */
            let svgData = document.getElementById('svg-element-1').outerHTML;
            let blobData = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
            FileSaver.saveAs(blobData, 'image.svg');
            event.preventDefault();

        } else if (event.key === 'ArrowDown') {

            this.setState({ something: this.state.something + 1 });
            event.preventDefault();

        } else if (event.key === 'ArrowUp') {

            this.setState({ something: this.state.something - 1 });
            event.preventDefault();
        }
    }

    handleMouseMove() {
        console.log("Hello PARENT");
    }

    render() {

        // let ptn = this.state.gridCoords.map((coord) => {
        //     return ( 
        //         <use 
        //             key={ coord.x.toString() + coord.y.toString() } 
        //             href="#svg-circle-1" 
        //             x={ coord.x } 
        //             y={ coord.y }
        //             transform={`rotate(45 ${coord.x} ${coord.y})`}
        //         />
        //     );
        // });

        let opts = this.props.options;

        return (
            <div id="svgCanvas" onKeyPress={ this.handleKeyPress } >
            
                {/* Used to detect resize event on #svgCanvas element 
                <ReactResizeDetector
                    handleHeight
                    handleWidth 
                    onResize={ this.onResize } 
                />*/}

                {/* Actual svg content */}
                <SVGElement id="svg-element-1" width={ this.state.width } height={ this.state.height } ref={ (SVGElement) => this.svg = SVGElement }>

                    <defs>
                        <SVGPattern
                            id="svg-pattern-1" data={ this.data } something={ this.state.something }
                            x="0" y="0" width={ opts.w } height={ opts.h } patternUnits="userSpaceOnUse"
                        />
                    </defs>

                    <rect fill="url(#svg-pattern-1)" stroke="" width={ this.state.width } height={ this.state.height }/>
                    
                    {/*<defs>
                        
                        {/* Based on Pattern picked by user are patterns created here 
                        <SVGPattern 
                            id="svg-pattern-1" data={ this.data } 
                            x="0" y="0" width={ opts.w } height={ opts.h } patternUnits="userSpaceOnUse"
                        />

                        <g>
                            <rect id="svg-circle-1" width={ this.state.elemSize } height={ this.state.elemSize } fill="blue"/>
                        </g>
                    </defs>*/}

                    {/* Based on Layout created in LayoutBuilder are placed rects 
                    <g>
                        <rect fill="url(#svg-pattern-1)" stroke="" width={ this.state.width } height={ this.state.height }/>
                    </g>
                    */}

                    {/*
                    <g onMouseOver={ this.handleMouseMove }>
                        { ptn }
                    </g>
                    */}
                
                </SVGElement>
            </div>
        );
    }
}

export default SVGCanvas;