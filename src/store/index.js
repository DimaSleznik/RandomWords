import { createStore } from "redux";
import { rootReducer } from "./rootReducer";
export * from './profile';
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const store = createStore(rootReducer,devTools);
