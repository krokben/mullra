import { componentReducer } from "../../src/store/component/reducers";
import {
  ADD_COMPONENT,
  INIT_COMPONENTS,
} from "../../src/store/component/types";

describe("component reducer", () => {
  it("should handle INIT_COMPONENTS", () => {
    expect(
      componentReducer(
        { components: [{ type: "header", description: "some description" }] },
        {
          type: INIT_COMPONENTS,
          components: [{ type: "slider", description: "another description" }],
        }
      )
    ).toEqual({
      components: [{ type: "slider", description: "another description" }],
    });
  });

  it("should handle ADD_COMPONENT", () => {
    expect(
      componentReducer(
        { components: [{ type: "header", description: "some description" }] },
        {
          type: ADD_COMPONENT,
          component: { type: "slider", description: "another description" },
        }
      )
    ).toEqual({
      components: [
        { type: "header", description: "some description" },
        { type: "slider", description: "another description" },
      ],
    });
  });
});
