import {
  Component,
  ComponentState,
  ComponentActionTypes,
  INIT_COMPONENTS,
  ADD_COMPONENT,
} from "./types";

const initialState: ComponentState = {
  components: [],
};

export function componentReducer(
  state = initialState,
  action: ComponentActionTypes,
): ComponentState {
  switch (action.type) {
    case INIT_COMPONENTS:
      return {
        ...state,
        components: action.components,
      };
    case ADD_COMPONENT:
      return {
        ...state,
        components: [...state.components, ...[action.component]],
      };
    default:
      return state;
  }
}
