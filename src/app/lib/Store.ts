import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartCountSlice"

export const Store = configureStore({
    reducer: cartSlice
})

export type RootState = ReturnType<typeof Store.getState>