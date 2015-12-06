/**
 * This component is rendering an svg graph that will display a graph of the current stamina path and expected
 * stamina projection
 */

import React from 'react';


// TODO: add x-axis lines (times)
// TODO: Add event handler for adding events

export default React.createClass({

	propTypes: {
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
	 * Generate a list of points for out poly line
	 * @returns {*[]}
	 */
	generatePoints() {

		let adjustedHeight = this.props.maximumStamina * this.props.staminaHeightModifier;

		/**
		 * Important note: each point consists of x, y.  x from left to right, y top to bottom
		 * So given a 100x100 box:
		 *  (0, 0) is the top left.
		 *  (0, 100) would be lower left
		 *  (100, 0) would be top right
		 *  (100, 100) would be bottom right
		 *
		 * TODO: use currentStamina to set the starting point
		 * TODO: calculate a rate of change
		 * TODO: incorporate events and their change.
		 */

		return [
			`0, ${adjustedHeight}`,
			`100, ${adjustedHeight-30}`,
			`200, ${adjustedHeight-60}`,
			`200, ${adjustedHeight}`,
			`300, ${adjustedHeight-30}`,
			`300, ${adjustedHeight}`,
			`400, ${adjustedHeight-30}`,
			`400, ${adjustedHeight-adjustedHeight}`,
			`1440, 0`
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