import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({});

export const store = createStore(rootReducer);

export type Store = ReturnType<typeof rootReducer>;
