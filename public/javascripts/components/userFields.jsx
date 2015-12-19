/**
 * This component displays all the input values that a user can interact with
 */

import React from 'react';


export default React.createClass({

	propTypes: {
		currentStamina: React.PropTypes.number,
		maximumStamina: React.PropTypes.number,
		rank: React.PropTypes.number,

		updateStamina: React.PropTypes.func,
		updateRank: React.PropTypes.func
	},

	/**
	 * TODO: Oddly enough, this.updateRank does not seem to pass in the event correctly.
	 * I will need to read up on why the "rank" and "currentStamina" input fields are behaving differently
	 * @param event
	 */
	updateRank(event) {
		let rank = parseInt(event.target.value || 1);
		this.props.updateRank(rank);
	},

	updateStamina(event) {
		let currentStamina = parseInt(event.target.value || 1);
		this.props.updateStamina(currentStamina);
	},

	render() {
		let props = this.props;
		return (<div>
			<input type="number" name="rank" placeholder="Rank" min="1" max="500" onChange={props.updateRank} value={props.rank} />
			<input type="number" name="currentStamina" placeholder="Current Stamina" min="0" max={props.maximumStamina} onChange={this.updateStamina} value={props.currentStamina} />
			<input type="text" name="timeLeft" placeholder="Time Left" />
		</div>);
	}
});