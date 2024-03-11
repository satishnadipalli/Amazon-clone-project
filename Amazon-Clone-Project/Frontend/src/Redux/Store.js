import { configureStore} from "@reduxjs/toolkit"
import cartReducer from './CartSlice';
import modalReducer from './ModelSlice';
import submitReducer from '../Components/OnTwoProduct/submitfeedbackModel'
export const reduxStore= configureStore({
    reducer :{
        cart : cartReducer,
        cartModal : modalReducer,
        sumbitModal : submitReducer
    }
});