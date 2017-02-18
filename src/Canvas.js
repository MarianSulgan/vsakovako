
import React, { Component } from 'react';
import { paper } from 'paper';

class Canvas extends Component {

    constructor() {
        super();
        this.state = {
            shape: paper.Shape
        }
    }

    componentDidMount() {
        // Instantiate the paperScope with the canvas element
        var myCanvas = document.getElementById('myCanvas');
        paper.setup(myCanvas);
        
        // Draw a circle in the center
        var width = paper.view.size.width;
        var height = paper.view.size.height;
        this.setState({shape: 
            new paper.Shape.Circle({
                center: [width / 2, height / 2],
                fillColor: 'grey',
                radius: 10
            })
        });
        
        // render
        paper.view.draw();
    }

    onResize(event) {
	    // Whenever the window is resized, recenter the path:
	    console.log('Resize window...');
    }

    render() {
        return (
            <div className="canvas-container">
                <canvas id="myCanvas" data-paper-resize />
            </div>
        );
    }
};

function onResize(event) {
	    // Whenever the window is resized, recenter the path:
	    console.log('Resize window externa;...');
    }

export default Canvas;