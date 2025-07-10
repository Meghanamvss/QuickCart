import { configureStore } from "@reduxjs/toolkit";
import cartslicer from "./createSlice"


export default configureStore({

reducer:{
 store:cartslicer

}

})

