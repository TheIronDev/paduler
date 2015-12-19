/**
 * A set of reducers to handle our actions
 *
 * TODO: Implement reducers
 */

import { combineReducers } from 'redux';

const initialState = {
	rank: 100,
	currentStamina: 20,
	maximumStamina: 66,
	timeLeft: 300,
	events: []
};

const defaultAction = {
	type: 'no-op'
};

function paduler(state = initialState, action = defaultAction) {

	let data = action.data || {};
	switch (action.type) {
		case 'CHANGE_RANK':
			return Object.assign({}, state, {
				rank: data.rank,
				maximumStamina: data.maximumStamina
			});
		case 'CHANGE_CURRENT_STAMINA':
			return Object.assign({}, state, {
				currentStamina: data.currentStamina
			});
		case 'ADD_EVENT':
		case 'REMOVE_EVENT':
		case 'DECREMENT_TIMELEFT':

		default:
			return state;
	}
}

const reducers = combineReducers({
	paduler
});

export default reducers;
