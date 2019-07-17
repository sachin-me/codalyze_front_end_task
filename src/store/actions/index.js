const actions = {
	getAllProducts: ({products}, cb) => dispatch => {
		new Promise((resolve, reject) => {
			if (resolve) {
				dispatch({
					type: 'GET_PRODUCTS_SUCCESS',
					products
				})
				cb(true)
			} else {
				cb(false)
				console.log('Failed to read data from json file');
			}
		})
	}
}

export default actions;