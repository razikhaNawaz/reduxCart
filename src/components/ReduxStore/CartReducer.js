import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isCartVisible:false
}

const CartReducer=createSlice({
    name: 'Cart',
    initialState:initialState,
    reducers:{
        VisibilityChange(state){
            state.isCartVisible=!state.isCartVisible
        }
    }
})
export const CartAction=CartReducer.actions
export default CartReducer.reducer