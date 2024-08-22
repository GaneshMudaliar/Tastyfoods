import {configureStore} from "@reduxjs/toolkit";
import CartSlices from "./CartSlices";
import CategorySlice from "./CategorySlice";
import SearchSlice from "./SearchSlice";


const Store = configureStore({
 reducer : {
  cart: CartSlices,
    category: CategorySlice,
    search: SearchSlice,
 }
});

export default Store;