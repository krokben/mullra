import {
  Component,
  INIT_COMPONENTS,
  ADD_COMPONENT,
  SET_ACTIVE_COMPONENT,
  ComponentActionTypes,
} from "./types";

export function initComponents(components: Component[]): ComponentActionTypes {
  return {
    type: INIT_COMPONENTS,
    components,
  };
}

export function addComponent(component: Component): ComponentActionTypes {
  return {
    type: ADD_COMPONENT,
    component,
  };
}

export function setActiveComponent(
  componentType: string,
): ComponentActionTypes {
  return {
    type: SET_ACTIVE_COMPONENT,
    componentType,
  };
}
