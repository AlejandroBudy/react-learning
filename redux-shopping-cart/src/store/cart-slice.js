import {createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload
            const currentItem = state.items.find(item => item.id === newItem.id)
            if (!currentItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    title: newItem.title
                })
            } else {
                currentItem.quantity++
                currentItem.totalPrice = currentItem.totalPrice + newItem.price
            }

            state.totalQuantity++
        },
        removeItemFromCart(state, action) {
            const id = action.payload
            const currentItem = state.items.find(item => item.id === id)
            if (currentItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id)
            } else {
                currentItem.quantity--
                currentItem.totalPrice = currentItem.totalPrice - currentItem.price
            }
            state.totalQuantity--
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer