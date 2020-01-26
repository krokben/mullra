import { Store } from "../../server";
import {
  Component,
  getComponents,
  addComponent,
  updateComponentDescription,
  removeComponent,
} from "../../components";

test("POST component then GET components STUB", async () => {
  const component = {
    type: "header",
    name: "Header",
    description: "first component",
    active: false,
  };
  const stubStore: Store = { components: [] };

  addComponent(stubStore, component);

  const components: Component[] = await getComponents(stubStore);
  expect(components).toStrictEqual([component]);
});

test("PUT component then GET components STUB", async () => {
  const stubStore: Store = { components: [] };

  addComponent(stubStore, {
    type: "header",
    name: "Header",
    description: "first component",
    active: false,
  });
  updateComponentDescription(stubStore, "header", "new component description");

  const components: Component[] = await getComponents(stubStore);
  expect(components).toStrictEqual([
    {
      type: "header",
      name: "Header",
      description: "new component description",
      active: false,
    },
  ]);
});

test("DELETE component then GET components STUB", () => {
  const stubStore: Store = {
    components: [
      {
        type: "header",
        name: "Header",
        description: "first component",
        active: false,
      },
      {
        type: "slider",
        name: "Slider",
        description: "second component",
        active: false,
      },
      {
        type: "button",
        name: "Button",
        description: "third component",
        active: false,
      },
    ],
  };

  removeComponent(stubStore, "slider")
    .then(async () => {
      const expectedComponents: Component[] = [
        {
          type: "header",
          name: "Header",
          description: "first component",
          active: false,
        },
        {
          type: "button",
          name: "Button",
          description: "third component",
          active: false,
        },
      ];

      const components: Component[] = await getComponents(stubStore);
      expect(components).toStrictEqual(expectedComponents);
    })
    .catch(console.error);
});
