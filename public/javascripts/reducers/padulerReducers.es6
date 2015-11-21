/**
 * A set of reducers to handle our actions
 *
 * TODO: Implement reducers
 */

import { combineReducers } from 'redux';

const initialState = {
	rank: 1,
	currentStamina: 20,
	maximumStamina: 20,
	timeLeft: 300,
	events: []
};

const defaultAction = {
	type: 'no-op'
};

function paduler(state = initialState, action = defaultAction) {

	switch (action.type) {

		case 'CHANGE_RANK':
		case 'CHANGE_CURRENT_STAMINA':
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
