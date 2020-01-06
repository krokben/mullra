import { Store } from "../../server";
import {
  Component,
  getComponents,
  addComponent,
  updateComponentDescription,
  removeComponent,
} from "../../components";

test("POST component then GET components STUB", async () => {
  const component = { type: "header", description: "first component" };
  const stubStore: Store = { components: [] };

  addComponent(stubStore, component);

  const components: Component[] = await getComponents(stubStore);
  expect(components).toStrictEqual([component]);
});

test("PUT component then GET components STUB", async () => {
  const stubStore: Store = { components: [] };

  addComponent(stubStore, { type: "header", description: "first component" });
  updateComponentDescription(stubStore, "header", "new component description");

  const components: Component[] = await getComponents(stubStore);
  expect(components).toStrictEqual([
    { type: "header", description: "new component description" },
  ]);
});

test("DELETE component then GET components STUB", () => {
  const stubStore: Store = {
    components: [
      { type: "header", description: "first component" },
      { type: "slider", description: "second component" },
      { type: "button", description: "third component" },
    ],
  };

  removeComponent(stubStore, "slider")
    .then(async () => {
      const expectedComponents: Component[] = [
        { type: "header", description: "first component" },
        { type: "button", description: "third component" },
      ];

      const components: Component[] = await getComponents(stubStore);
      expect(components).toStrictEqual(expectedComponents);
    })
    .catch(console.error);
});
