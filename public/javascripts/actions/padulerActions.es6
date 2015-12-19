/**
 * A series of actions that define the complexity behind this webapp
 *
 * TODO: Implement actions
 */

import rankStaminaMap from '../utils/rankStaminaMap.es6';

export function changeRank(rank) {

	let maximumStamina = parseInt(rankStaminaMap[rank], 10);
	let data = {
		rank,
		maximumStamina
	};
	return {
		type: 'CHANGE_RANK',
		data
	}
};

export function changeCurrentStamina(currentStamina) {
	let data = {
		currentStamina
	};
	return {
		type: 'CHANGE_CURRENT_STAMINA',
		data
	}
};

export function addEvent(event) {
	let data = {
		event
	};
	return {
		type: 'ADD_EVENT',
		data
	}
};

export function removeEvent(event) {
	let data = {
		event
	};
	return {
		type: 'REMOVE_EVENT',
		data
	}
};

export function decrementTimeLeft(timeLeft) {
	let data = {
		timeLeft: timeLeft
	};
	return {
		type: 'DECREMENT_TIMELEFT',
		data
	}
};

