import { createStore } from "redux";
import rootReducer from "../reducers/counterReducer";

const store = createStore(rootReducer);

export default store;