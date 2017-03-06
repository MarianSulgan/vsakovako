/* 
Canvas component
*/

import React, { Component } from 'react';
import paper from 'paper';
import FileSaver from 'file-saver';

import '../css/Canvas.css';

class Canvas extends Component {

    // constructor(props) {
    //     super(props);
        // this.state = {
        //     width: 500,
        //     height: 500
        // };
    // }

    componentDidMount() {

        paper.setup(this.canvas);
		this.path = new paper.Path();

        let path = this.path;
		path.strokeColor = 'black';

        // Create a simple drawing tool:
		let tool = new paper.Tool();
        this.tool = tool;

        // draw initial shape or pattern
        // ...
        let x = new paper.Path.Circle(new paper.Point(200, 200), 30);
        x.fillColor = 'red';
        x = new paper.Path.Circle(new paper.Point(300, 350), 60);
        x.fillColor = 'blue';

        this.segment = false;
        this.movePath = false;
        this.hitOptions = {
            segments: true,
            stroke: true,
            fill: true,
            tolerance: 10
        };

        paper.view.draw();

		// 'bind' event handlers
		tool.onMouseDown = (event) => { this.onMouseDown(event) };
		tool.onMouseDrag = (event) => { this.onMouseDrag(event) };
        tool.onMouseMove = (event) => { this.onMouseMove(event) };
        tool.onKeyDown = (event) => { this.onKeyDown(event) };

    }

    onMouseMove(event) {
        paper.project.activeLayer.selected = false;
        if (event.item) {
            event.item.selected = true;
        }
    }

    onMouseDown(event) {
        this.segment = null;
        this.path = null;
        let hitResult = paper.project.hitTest(event.point, this.hitOptions);
        if (!hitResult)
            return;

        if (event.modifiers.shift) {
            if (hitResult.type === 'segment') {
                hitResult.segment.remove();
            };
            return;
        }

        if (hitResult) {
            this.path = hitResult.item;
            if (hitResult.type === 'segment') {
                this.segment = hitResult.segment;
            } else if (hitResult.type === 'stroke') {
                let location = hitResult.location;
                this.segment = this.path.insert(location.index + 1, event.point);
                this.path.smooth();
            }
        }
        this.movePath = hitResult.type === 'fill';
        if (this.movePath) {
            paper.project.activeLayer.addChild(hitResult.item);
        }
    }

    onMouseDrag(event) {
        if (this.segment) {
            this.segment.point += event.delta;
            this.path.smooth();
        } else if (this.path) {
            this.path.position = new paper.Point(
                this.path.position.x + event.delta.x,
                this.path.position.y + event.delta.y,
            );
        }
    }

    onKeyDown(event) {
        if (event.key === 'd') {
            let svgData = paper.project.exportSVG({ asString: true });
            let blobData = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
            FileSaver.saveAs(blobData, 'image.svg');

            // prevent default behavior
            return false;
        }
    }

    render() {
        return (
            <canvas 
                ref={ (c) => this.canvas = c }
                width={ this.props.width }
                height={ this.props.height }
            />
        );
    }

}

export default Canvas;