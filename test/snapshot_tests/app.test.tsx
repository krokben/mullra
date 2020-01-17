import * as React from "react";
import { create } from "react-test-renderer";
import { Provider } from "react-redux";

import App from "../../src/App";
import configureStore from "../../src/store";

const store = configureStore();

describe("App", () => {
  test("snapshot renders", () => {
    const root: any = create(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(root.toJSON()).toMatchSnapshot();
  });
});
