/**
 * A series of actions that define the complexity behind this webapp
 *
 * TODO: Implement actions
 */

export function changeRank(rank) {
	let data = {
		rank
	};
	return {
		type: 'CHANGE_RANK',
		data
	}
};

export function changeCurrentStamina(stamina) {
	let data = {
		stamina
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

