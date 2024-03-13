import { configureStore } from "@reduxjs/toolkit";
import {TodoReducer} from '../assets/feathers/TodoSlice'


const store = configureStore({
    reducer: TodoReducer
});

export default store;