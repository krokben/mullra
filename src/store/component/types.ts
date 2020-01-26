export interface Component {
  type: string;
  name: string;
  description: string;
  active: boolean;
}

export interface ComponentState {
  components: Component[];
}

export const INIT_COMPONENTS = "INIT_COMPONENTS";
export const ADD_COMPONENT = "ADD_COMPONENT";
export const SET_ACTIVE_COMPONENT = "SET_ACTIVE_COMPONENT";

interface InitComponentsAction {
  type: typeof INIT_COMPONENTS;
  components: Component[];
}

interface AddComponentAction {
  type: typeof ADD_COMPONENT;
  component: Component;
}

interface SetActiveComponentAction {
  type: typeof SET_ACTIVE_COMPONENT;
  componentType: string;
}

export type ComponentActionTypes =
  | InitComponentsAction
  | AddComponentAction
  | SetActiveComponentAction;
