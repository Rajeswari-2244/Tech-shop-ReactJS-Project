import { configureStore } from "@reduxjs/toolkit";
import reducer1 from './reducer1'

const store=configureStore({
    reducer:{
        reducerdata:reducer1
    }
})
export default store