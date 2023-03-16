import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartReducer";


const store=configureStore({
    reducer:{
        cartreducer:CartReducer
    }
})
export default store