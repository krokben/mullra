import { createStore, combineReducers } from "redux";
import { songReducer } from "./song/reducers";

const rootReducer = combineReducers({
  songs: songReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  return createStore(rootReducer);
}
