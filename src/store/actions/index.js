const actions = {
	getAllProducts: ({products, pricingInfo}, cb) => dispatch => {
		new Promise((resolve, reject) => {
			if (resolve) {
				dispatch({
					type: 'GET_PRODUCTS_SUCCESS',
					products,
					pricingInfo
				})
				cb(true)
			} else {
				cb(false)
			}
		})
	},

	editProduct: (data, cb) => dispatch => {
		new Promise((resolve, reject) => {
			if (resolve) {
				dispatch({
					type: 'EDIT_PRODUCT_SUCCESS',
					data
				})
				cb(true)
			} else {
				cb(false)
			}
		})
	}
}

export default actions;