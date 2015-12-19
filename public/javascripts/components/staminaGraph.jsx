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
			staminaHeightModifier: 5,
			svgWidth: 1440 // aka minutes in a day
		}
	},

	generateViewBox() {
		let maximumStamina = this.props.maximumStamina;
		let staminaHeightModifier = this.props.staminaHeightModifier;
		let viewBoxWidth = this.props.svgWidth;
		let viewBoxHeight = maximumStamina*staminaHeightModifier;

		return `0 0 ${viewBoxWidth} ${maximumStamina*staminaHeightModifier}`;
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

	findNextPoint(currentPoint) {
		return [currentPoint[0] + currentPoint[1], 0];
	},

	/**
	 * Generate a list of points for out poly line
	 * @returns {*[]}
	 */
	generatePoints() {

		/**
		 * Important note: each point consists of x, y.  x from left to right, y top to bottom
		 * So given a 100x100 box:
		 *  (0, 0) is the top left.
		 *  (0, 100) would be lower left
		 *  (100, 0) would be top right
		 *  (100, 100) would be bottom right
		 *
		 * TODO: incorporate events and their change.
		 */

		let maximumStamina = this.props.maximumStamina;
		let staminaHeightModifier = this.props.staminaHeightModifier;

		let initialPoint = this.generatePoint(0, this.props.currentStamina, maximumStamina, staminaHeightModifier);
		let nextPoint = this.findNextPoint(initialPoint);
		let lastPoint = [this.props.svgWidth, 0];


		return [
			initialPoint,
			nextPoint,
			lastPoint
		];
	},

	render() {
		let maximumStamina = this.props.maximumStamina;
		let staminaHeightModifier = this.props.staminaHeightModifier;
		let svgHeight = this.props.maximumStamina * this.props.staminaHeightModifier;
		let svgWidth = this.props.svgWidth;
		return (<div className="staminaGraph-container">
			<svg viewBox={this.generateViewBox()} className="staminaGraph-chart">
				<polyline
					fill="none"
					stroke="#0074d9"
					strokeWidth="2"
					points={this.generatePoints()} />

				<text x={svgHeight/2 * -1} y="20"
				      transform="rotate(-90)"
				      fontFamily="Verdana" >
					Stamina
				</text>

				<text x={svgWidth/2} y={svgHeight - 10}
				      fontFamily="Verdana">
					Time
				</text>
			</svg>

		</div>);
	}
});