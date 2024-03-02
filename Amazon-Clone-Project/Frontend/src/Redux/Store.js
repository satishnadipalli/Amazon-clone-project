import { configureStore} from "@reduxjs/toolkit"
import cartReducer from './CartSlice';
import modalReducer from './ModelSlice';
export const reduxStore= configureStore({
    reducer :{
        cart : cartReducer,
        cartModal : modalReducer
    }
});