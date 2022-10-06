import { configureStore } from "@reduxjs/toolkit";
import ToDoSlice from "./toDoSlice";

const store = configureStore({
    reducer: {
        todo:ToDoSlice ,
    },
});

export default store;