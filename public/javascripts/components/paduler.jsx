

import React from 'react';
import { connect } from 'react-redux';

import UserFields from './userFields.jsx';
import StaminaGraph from './staminaGraph.jsx';

// TODO: "Connect" redux :)

export default React.createClass({

	render() {
		return (<div>
			<UserFields />
			<StaminaGraph />
		</div>);
	}
});