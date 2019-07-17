const initState = {
	products: [],
	priceInfo: {}
}

function productReducers(state = initState, action) {
	switch (action.type) {
		case 'GET_PRODUCTS_SUCCESS' : {
			return {
				...state,
				products: action.products,
				priceInfo: action.pricingInfo
			}
		}

		case 'EDIT_PRODUCT_SUCCESS' : {
			return {
				...state,
				products: state.products.map((product, index) => {
					if (index === Number(action.data.id)) {
						return action.data
					} else {
						return product
					}
				})
			}
		}

		default:
			return state;
	}
}

export default productReducers;