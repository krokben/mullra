import * as React from "react";
import { create } from "react-test-renderer";

import CarouselComponent from "../../src/components/carousel-component";

describe("CarouselComponent", () => {
  test("snapshot renders", () => {
    const root: any = create(<CarouselComponent />);
    expect(root.toJSON()).toMatchSnapshot();
  });
});
