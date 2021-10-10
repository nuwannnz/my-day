import { configureStore } from "@reduxjs/toolkit";
import todos from './todo/todo.slice';

export const store = configureStore({
    reducer: {
        todos,
    }
});

export type RootState = ReturnType<typeof store.getState>;
