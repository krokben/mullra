export interface Component {
  type: string;
  description: string;
}

export interface ComponentState {
  components: Component[];
}

export const INIT_COMPONENTS = "INIT_COMPONENTS";
export const ADD_COMPONENT = "ADD_COMPONENT";

interface InitComponentsAction {
  type: typeof INIT_COMPONENTS;
  components: Component[];
}

interface AddComponentAction {
  type: typeof ADD_COMPONENT;
  component: Component;
}

export type ComponentActionTypes = InitComponentsAction | AddComponentAction;
