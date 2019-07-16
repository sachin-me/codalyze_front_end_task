import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component {
	render() {
		return (
			<div>I am main</div>
		)
	}
}

export default connect(null)(Main);