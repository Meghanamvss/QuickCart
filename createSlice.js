import {createSlice} from "@reduxjs/toolkit"

const initialState={
 cartItems:[],
 cartCount:0
}


const cartslice=createSlice({
 name:"mycart",
 initialState,
 reducers:{
  addtocart(state,action){
   state.cartItems.push(action.payload);
   state.cartCount=state.cartItems.length
  },

  removecart(state,action){
   state.cartItems.splice(action.payload,1);
   state.cartCount=state.cartItems.length
  }

   
 }


})

export const {addtocart,removecart}=cartslice.actions

export default cartslice.reducer;
