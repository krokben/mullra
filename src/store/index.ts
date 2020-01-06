import { createStore, combineReducers } from "redux";
import { componentReducer } from "./component/reducers";

const rootReducer = combineReducers({
  components: componentReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  return createStore(rootReducer);
}
