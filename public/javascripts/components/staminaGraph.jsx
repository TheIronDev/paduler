/**
 * This component is rendering an svg graph that will display a graph of the current stamina path and expected
 * stamina projection
 */

import React from 'react';


// TODO: add x-axis lines (times)
// TODO: Add event handler for adding events

export default React.createClass({

	propTypes: {
		currentStamina: React.PropTypes.number,
		maximumStamina: React.PropTypes.number,
		staminaHeightModifier: React.PropTypes.number
	},

	getDefaultProps() {
		return {
			staminaHeightModifier: 5, // convenient number to use, since stamina increases at a rate of 1/5.
			svgWidth: 1440 // aka minutes in a day
		};
	},

	/**
	 * Return the dimentions for our svg's view box
	 * @param maximumStamina
	 * @param staminaHeightModifier
	 * @param svgWidth
	 * @returns {String}
	 */
	getViewBox(maximumStamina, staminaHeightModifier, svgWidth) {

		let viewBoxHeight = maximumStamina * staminaHeightModifier + 50;

		return `0 0 ${svgWidth} ${viewBoxHeight}`;
	},

	/**
	 * Generate a point on the canvas
	 * @param stamina
	 * @param maximumStamina
	 * @param heightModifier
	 */
	generatePoint(timePoint, stamina, maximumStamina, heightModifier) {
		return [timePoint, (maximumStamina - stamina) * heightModifier];
	},

	/**
	 * Given a point on our graph, return the next point
	 * @param currentPoint
	 * @param finalXPoint
	 * @returns {number[]}
	 */
	findNextPoint(currentPoint, finalXPoint) {

		// If we are already at max stamina, and there are no events before hand, return the final point
		if (currentPoint[1] === 0) {
			return [finalXPoint, 0];
		}

		let nextXCoordinate = currentPoint[0] + currentPoint[1];

		return [nextXCoordinate, 0];
	},

	/**
	 * Generate a list of points for our poly line.
	 *
	 * Important note: each point consists of x, y.  x from left to right, y top to bottom
	 *  So given a 100x100 box:
	 *      (0, 0) is the top left.
	 *      (0, 100) would be lower left
	 *      (100, 0) would be top right
	 *      (100, 100) would be bottom right
	 *
	 * @returns { []Points } - An array of points for poly
	 */
	generatePoints(currentStamina, maximumStamina, staminaHeightModifier, svgWidth) {

		// TODO: incorporate events

		let initialPoint = this.generatePoint(0, currentStamina, maximumStamina, staminaHeightModifier);
		let currentPoint = initialPoint;
		let points = [initialPoint];

		// do-while because I want to push the last point one last time.
		do {
			let nextPoint = this.findNextPoint(points[points.length - 1], svgWidth);
			points.push(nextPoint);
			currentPoint = nextPoint;
		} while(currentPoint[0] < svgWidth);

		return points;
	},

	/**
	 * Render the y-axis label, rotated -90 degrees
	 * @param svgHeight
	 * @returns {XML}
	 */
	renderYAxis(svgHeight) {
		return (<g>
			<text x={svgHeight/2 * -1} y="20"
			      transform="rotate(-90)"
			      fontFamily="Verdana" >
				Stamina
			</text>
		</g>);
	},

	/**
	 * Render the x-axis line, x-axis label, and x-axis scale
	 * @param maximumStamina
	 * @param staminaHeightModifier
	 * @param svgWidth
	 * @param svgHeight
	 * @returns {JSX}
	 */
	renderXAxis(maximumStamina, staminaHeightModifier, svgWidth, svgHeight) {
		return (<g>
			<line x1="0" y1={maximumStamina * staminaHeightModifier}
		              x2={svgWidth} y2={maximumStamina * staminaHeightModifier}
		              stroke="black"
		              strokeWidth="1"/>

			<text x={svgWidth/2} y={svgHeight + 20}>Time</text>
		</g>);
	},

	render() {
		let currentStamina = this.props.currentStamina;
		let maximumStamina = this.props.maximumStamina;
		let staminaHeightModifier = this.props.staminaHeightModifier;
		let svgHeight = this.props.maximumStamina * this.props.staminaHeightModifier;
		let svgWidth = this.props.svgWidth;

		return (<div className="staminaGraph-container">
			<svg viewBox={this.getViewBox(maximumStamina, staminaHeightModifier, svgWidth)} className="staminaGraph-chart">
				<polyline
					fill="none"
					stroke="#0074d9"
					strokeWidth="2"
					points={this.generatePoints(currentStamina, maximumStamina, staminaHeightModifier, svgWidth)} />

				{this.renderYAxis(svgHeight)}
				{this.renderXAxis(maximumStamina, staminaHeightModifier, svgWidth, svgHeight)}

			</svg>

		</div>);
	}
});