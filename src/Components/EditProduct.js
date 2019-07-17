import React, { Component } from 'react';

class EditProduct extends Component {
	render() {
		return (
			<table>
				<tr>
					<th>FieldName</th>
					<th>Type</th>
				</tr>
				<tr>
					<td>Name</td>
					<td>
						<input type="text"/>
					</td>
				</tr>
				<tr>
					<td>Weight</td>
					<td>
						<input type="text"/>
					</td>
				</tr>
				<tr>
					<td>Availability</td>
					<td>
						<input type="number"/>
					</td>
				</tr>
				<tr>
					<td>Product URL</td>
					<td>
						<input type="text"/>
					</td>
				</tr>
				<tr>
					<td>Price Tier</td>
					<td>
						<label htmlFor="">
							<input type="radio" name="group1" id=""/>
							budget
						</label>
						<label htmlFor="">
							<input type="radio" name="group1" id=""/>
							premier
						</label>
					</td>
				</tr>
				<tr>
					<td>Price Range</td>
					<td>
						<input type="text"/>
					</td>
				</tr>
				<tr>
					<td>isEditable</td>
					<td>
						<input type="checkbox" name="" id=""/>
					</td>
				</tr>
			</table>
		);
	}
}

export default EditProduct;