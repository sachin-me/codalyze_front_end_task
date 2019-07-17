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
				<thead>
					<tr>
						<th className="table-header">Name</th>
						<th className="table-header">Weight</th>
						<th className="table-header">Availability</th>
						<th className="table-header">isEditable</th>
					</tr>
				</thead>
				<tbody>
					{
						isLoading ? 'Loading...' : products.map((product, index) => (
							<tr key={index}>
								<th className="table-data">{product.name}</th>
								<th className="table-data">{product.weight}</th>
								<th className="table-data">{product.availability}</th>
								<th className="table-data">{product.isEditable ? <p className="edit-btn" onClick={() => this.handleEdit(index)}>Edit</p> : ''}</th>
							</tr>
						))
					}
				</tbody>
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