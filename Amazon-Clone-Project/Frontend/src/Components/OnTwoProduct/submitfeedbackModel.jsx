import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen : false
}

const submitModalSlice = createSlice({
    name : 'sumbitModal',
    initialState,
    reducers:{
        openModal :(state,action)=>{
            console.log("opended")
            state.isOpen = true;
        },
        closeModal :(state,action)=>{
            state.isOpen = false;
        }
    }
});
export default submitModalSlice.reducer;
export const {openModal,closeModal} = submitModalSlice.actions;