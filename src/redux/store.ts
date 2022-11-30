import {configureStore} from "@reduxjs/toolkit";
import MoneySlice from "./slice/moneySlice";


export const store = configureStore({
    reducer: {
        money: MoneySlice
    }
})