import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartReducer";
import ExpenseReducer from "./ExpenseReducer";


const store=configureStore({
    reducer:{
        cartreducer:CartReducer,
        expensesReducer:ExpenseReducer
    }
})
export default store