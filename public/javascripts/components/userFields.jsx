/**
 * This component displays all the input values that a user can interact with
 */

import React from 'react';


export default React.createClass({

	render() {
		return (<div>
			<input type="number" name="rank" placeholder="Rank" />
			<input type="number" name="currentStamina" placeholder="Current Stamina" />
			<input type="text" name="timeLeft" placeholder="Time Left" />
		</div>);
	}
});