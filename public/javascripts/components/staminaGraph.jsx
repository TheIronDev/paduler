/**
 * This component is rendering an svg graph that will display a graph of the current stamina path and expected
 * stamina projection
 */

import React from 'react';

// TODO: Pass in a max stamina
export default React.createClass({

	render() {
		return (<div className="staminaGraph-container">
			<svg viewBox="0 0 500 100" className="staminaGraph-chart">
				<polyline
					fill="none"
					stroke="#0074d9"
					stroke-width="2"
					points="
						0, 100
						100,70
						200,40
						200,100
						300,70
						300,100
						400,70
						400,0
						500,0
						"/>
			</svg>
		</div>);
	}
});