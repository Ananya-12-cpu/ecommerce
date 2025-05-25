import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartCountSlice"

export const Store= configureStore({
    reducer:cartSlice
})