import { Store } from "../../server";
import {
  Component,
  getComponents,
  getComponent,
  addComponent,
} from "../../components";

test("get components", async () => {
  const stubStore: Store = { components: [] };
  const components: Component[] = await getComponents(stubStore);

  expect(components.length).toBe(0);
});

test("get component", async () => {
  const exampleComponent = {
    type: "header",
    name: "Header",
    description: "first component",
  };
  const stubStore: Store = { components: [exampleComponent] };
  const component: Component = await getComponent(stubStore, "header");
  expect(component).toBe(exampleComponent);
});

test("add component", async () => {
  const stubStore: Store = { components: [] };
  const newComponent: Component = {
    type: "header",
    name: "Header",
    description: "first component",
  };

  await addComponent(stubStore, newComponent);

  const component: Component = await getComponent(stubStore, "header");
  expect(component).toBe(newComponent);
});
