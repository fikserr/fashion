import { configureStore } from "@reduxjs/toolkit"
import DataSlice from "./dataSlice"
import basket from "./basket"

const store = configureStore({
    reducer:{
        data:DataSlice,
        basketData:basket
    }
})
export default store