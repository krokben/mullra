import * as React from "react";
import { create } from "react-test-renderer";

import Sidebar from "../../src/components/sidebar";

describe("Sidebar", () => {
  test("snapshot renders", () => {
    const root: any = create(<Sidebar />);
    expect(root.toJSON()).toMatchSnapshot();
  });
});
