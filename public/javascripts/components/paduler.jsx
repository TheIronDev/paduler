

import React from 'react';
import { connect } from 'react-redux';

import { changeRank, changeCurrentStamina } from '../actions/padulerActions.es6';

import UserFields from './userFields.jsx';
import StaminaGraph from './staminaGraph.jsx';

// Helper Component
// TODO: remove when I'm further along
let Debugger = React.createClass({
	render() {
		let style = {
			border: '1px dashed #666'
		};
		return (<div style={style}>
			<p>Debugging:</p>
			{JSON.stringify(this.props)}
		</div>);
	}
});

let Paduler = React.createClass({

	updateRank(event) {
		let rank = parseInt(event.target.value || 1);
		this.props.dispatch(changeRank(rank));
	},

	updateStamina(currentStamina) {
		this.props.dispatch(changeCurrentStamina(currentStamina));
	},

	render() {
		let props = this.props;
		return (<div>

			<UserFields
					updateRank={this.updateRank} updateStamina={this.updateStamina}
					rank={props.rank} maximumStamina={props.maximumStamina} currentStamina={props.currentStamina} />

			<StaminaGraph maximumStamina={props.maximumStamina} currentStamina={props.currentStamina} />
			<Debugger {...this.props} />
		</div>);
	}
});

// Given the state from our store, this function determines what props get defined and mapped to the redux store
function select(state) {

	let paduler = state.paduler || {};
	return {
		rank: paduler.rank,
		currentStamina: paduler.currentStamina,
		maximumStamina: paduler.maximumStamina,
		timeLeft: paduler.timeLeft,
		events: paduler.events
	};
}

// Connect the parts of the store we want to pass into our Component
export default connect(select)(Paduler);