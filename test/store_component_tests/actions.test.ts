import {
  addComponent,
  initComponents,
} from "../../src/store/component/actions";
import {
  ADD_COMPONENT,
  INIT_COMPONENTS,
  Component,
  ComponentActionTypes,
} from "../../src/store/component/types";

describe("actions", () => {
  it("should create an action to init components", () => {
    const components: Component[] = [
      { type: "header", description: "some description" },
      { type: "slider", description: "another description" },
    ];
    const expectedAction: ComponentActionTypes = {
      type: INIT_COMPONENTS,
      components,
    };
    expect(initComponents(components)).toEqual(expectedAction);
  });

  it("should create an action to add component", () => {
    const component: Component = {
      type: "header",
      description: "some description",
    };
    const expectedAction: ComponentActionTypes = {
      type: ADD_COMPONENT,
      component,
    };
    expect(addComponent(component)).toEqual(expectedAction);
  });
});
