import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions';
const { editProduct } = actions;

class EditProduct extends Component {

	state = {
		name: '',
		weight: '',
		availability: '',
		productUrl: '',
		pricingTier: '',
		priceRange: '',
		isEditable: false
	}

	handleChange = ({ target: { value, name } }) => {
		this.setState({
			[name]: value
		})
	}

	handleEditable = () => {
		this.setState({
			isEditable: !this.state.isEditable
		})
	}

	handleSubmit = () => {
		const { id } = this.props.location
		const data = { ...this.state, id }
		this.props.dispatch(editProduct(data, (success) => {
			if (success) {
				this.props.history.push('/');
			}
		}))
	}

	render() {

		const { priceInfo } = this.props;
		const { name, weight, productUrl, pricingTier, priceRange } = this.state;
		const prices = pricingTier ? priceInfo[pricingTier] : '';

		return (
			<>
				<table>
					<tr>
						<th>FieldName</th>
						<th>Type</th>
					</tr>
					<tr>
						<td>Name</td>
						<td>
							<input type="text" name="name" onChange={this.handleChange} />
						</td>
					</tr>
					<tr>
						<td>Weight</td>
						<td>
							<input type="text" name="weight" onChange={this.handleChange} />
						</td>
					</tr>
					<tr>
						<td>Availability</td>
						<td>
							<input type="number" name="availability" onChange={this.handleChange} />
						</td>
					</tr>
					<tr>
						<td>Product URL</td>
						<td>
							<input type="text" name="productUrl" onChange={this.handleChange} />
						</td>
					</tr>
					<tr>
						<td>Price Tier</td>
						<td>
							<label htmlFor="">
								<input type="radio" name="pricingTier" value="budget" id="" onChange={this.handleChange}/>
								budget
							</label>
							<label htmlFor="">
								<input type="radio" name="pricingTier" value="premier" id="" onChange={this.handleChange}/>
								premier
							</label>
						</td>
					</tr>
					<tr>
						<td>Price Range</td>
						<td>
							<select name="priceRange" id="" onChange={this.handleChange}>
								<option>Select Price</option>
								{
									prices ? prices.map(price => {
										return (
											<option value={price}>{price}</option>
										)
									}) : ''
								}
							</select>
						</td>
					</tr>
					<tr>
						<td>isEditable</td>
						<td>
							<input type="checkbox" name="isEditable" id="" onChange={this.handleEditable} />
						</td>
					</tr>
				</table>
				<div>
					{
						name && weight && productUrl && pricingTier && priceRange ? 
						<button onClick={this.handleSubmit}>Submit</button> : ''
					}
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		priceInfo: state.productReducers.priceInfo
	}
}

export default connect(mapStateToProps)(EditProduct);