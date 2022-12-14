import { createSlice } from '@reduxjs/toolkit';

const stateCartItems = JSON.parse(localStorage.getItem('state'))?.cartItems
	? JSON.parse(localStorage.getItem('state')).cartItems
	: [];
const stateTotalPrice = JSON.parse(localStorage.getItem('state'))?.totalPrice
	? JSON.parse(localStorage.getItem('state')).totalPrice
	: 0;
const stateTotalItems = JSON.parse(localStorage.getItem('state'))?.totalItems
	? JSON.parse(localStorage.getItem('state')).totalItems
	: 0;

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cartItems: stateCartItems,
		totalPrice: stateTotalPrice,
		totalItems: stateTotalItems,
		
	},
	reducers: {
		addItem(state, action) {
			console.log(action.payload.price);
			console.log(state);

			if (state.cartItems.findIndex((item) => item.id === action.payload.id) !== -1) {
				console.log('hello');
				const index = state.cartItems.findIndex((item) => item.id === action.payload.id);
				if (state.cartItems[index].countInStock === 0) {
					return;
				}

				console.log(index);
				state.cartItems[index].countInStock = state.cartItems[index].countInStock - 1;
				state.cartItems[index].qty++;
				console.log(state.cartItems);
			} else {
				action.payload['qty'] = 1;
				console.log(action.payload);

				state.cartItems.push(action.payload);
				console.log(action.payload.price);
			}
			console.log("totalprice",state.totalPrice);
			state.totalPrice = Number((state.totalPrice + action.payload.price.mrp).toFixed(2));
			// Number(state.totalPrice).toFixed(2);

			state.totalItems = state.totalItems + 1;
			localStorage.setItem('state', JSON.stringify(state));
		},

		removeItem(state, action) {
			const result = state.cartItems.find((item) => item.id === action.payload.id);
			const resultIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
			if (result.qty === 1) {
				state.cartItems[resultIndex].stockInCount--;

				//result.stockInCount++;
				state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);

				//console.log(result);
			} else {
				result.qty--;
				result.stockInCount++;
			}

			state.totalItems--;
			state.totalPrice = Number((state.totalPrice - result.price.mrp).toFixed(2));
			localStorage.setItem('state', JSON.stringify(state.cartItems));
			console.log(JSON.parse(localStorage.getItem('state')).totalItems);
		},
		clearCart(state, action) {
			state.cartItems = [];
			state.totalPrice = 0;
			state.totalItems = 0;
			localStorage.setItem('state', JSON.stringify(state));
		},
		cartReset(state, action) {
			const { cartItems, totalItems, totalPrice } = JSON.parse(localStorage.getItem('state'));
			state.cartItems = cartItems;
			state.totalItems = totalItems;
			state.totalPrice = totalPrice;
		},
		
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice;