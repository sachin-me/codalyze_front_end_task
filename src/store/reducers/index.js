const initState = {
	products: []
}

function productReducers(state = initState, action) {
	switch (action.type) {
		case 'GET_PRODUCTS_SUCCESS' : {
			return {
				...state,
				products: action.products
			}
		}

		default:
			return state;
	}
}

export default productReducers;