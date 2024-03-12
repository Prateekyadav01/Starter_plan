import { createSlice } from "@reduxjs/toolkit";



export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state, actions)=>{
            state.push(actions.payload);
        },
        remove:(state , actions)=>{
           state.filter((i)=> i.id != actions.payload.id);
        },
    }


});


export const {add,remove} = CartSlice.actions;

export default CartSlice.reducer;