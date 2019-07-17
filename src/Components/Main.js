import React, { Component } from 'react';
import { connect } from 'react-redux';

import products from './../products.json';
import actions from '../store/actions/index.js';
const { getAllProducts } = actions;

class Main extends Component {

	state = {
		isLoading: false
	}

	componentDidMount() {
		if (!this.props.products.length) {
			this.setState({
				isLoading: true
			})
			this.props.dispatch(getAllProducts(products, (success) => {
				if (success) {
					this.setState({
						isLoading: false
					})
				}
			}))
		} 
		
	}

	handleEdit = (id) => {
		this.props.history.push({
			pathname: '/edit-product',
			id
		})
	}
	
	render() {
		const { products } = this.props;
		const { isLoading } = this.state;
		return (
			<table>
				<tr>
					<th>Name</th>
					<th>Weight</th>
					<th>Availability</th>
					<th>isEditable</th>
				</tr>
				{
					isLoading ? 'Loading...' : products.map((product, index) => (
						<>
							<tr>
								<th>{product.name}</th>
								<th>{product.weight}</th>
								<th>{product.availability}</th>
								<th>{product.isEditable ? <p onClick={() => this.handleEdit(index)}>Edit</p> : ''}</th>
							</tr>
						</>
					))
				}
			</table>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		products: state.productReducers.products
	}
}

export default connect(mapStateToProps)(Main);