/**
 * This component displays all the input values that a user can interact with
 */

import React from 'react';


export default React.createClass({

	propTypes: {
		rank: React.PropTypes.number,
		updateRank: React.PropTypes.func
	},

	render() {
		return (<div>
			<input type="number" name="rank" placeholder="Rank" min="1" max="500" onChange={this.props.updateRank} value={this.props.rank} />
			<input type="number" name="currentStamina" placeholder="Current Stamina" />
			<input type="text" name="timeLeft" placeholder="Time Left" />
		</div>);
	}
});