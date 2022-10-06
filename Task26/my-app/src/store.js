import { configureStore } from "@reduxjs/toolkit";
import ToDoSlice from "./ToDoSlice";

const store = configureStore({
    reducer: {
        todo:ToDoSlice ,
    },
});

export default store;