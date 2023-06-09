import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[],
    getData:true
}

const ExpenseReducer=createSlice({
name:'CartExpense',
initialState:initialState,
reducers:{
    addToCart(state,actions){
        state.items=actions.payload //nownot only previous data as well as updated  data coming from backend
        // const AddToCartItem=actions.payload
        
        // const isExist=state.items.find((item)=>item.id===AddToCartItem.id)
        // console.log(isExist);
        // if(isExist){
        //     isExist.quantity++
        //     isExist.totalPrice+=isExist.price
        // }else{
        //     state.items= [...state.items, actions.payload];
        // }
    },
    removeItem(state,actions){
        // const idOfRemovedItem=actions.payload
        // const removeItemExist=state.items.find((item)=>item.id===idOfRemovedItem)
        // if(removeItemExist.quantity>1){
        //     removeItemExist.quantity--
        //     removeItemExist.totalPrice-=removeItemExist.price
        // }else{
        //     state.items=state.items.filter((item)=>item.id!==idOfRemovedItem)
        // }
    },
    loadDataHandler(state){
        state.getData=!state.getData
    }
}
})
export const ExpenseActions=ExpenseReducer.actions
export default ExpenseReducer.reducer