import * as React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { INIT_COMPONENTS } from "./store/component/types";

import Sidebar from "./components/sidebar";
import CarouselComponent from "./components/carousel-component";

export default function App() {
  const components = useSelector(state => state.components.components);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({
      type: INIT_COMPONENTS,
      components: [
        ...components,
        ...[{ title: "component1" }, { title: "component2" }],
      ],
    });
  }, []);

  return (
    <main>
      <Sidebar components={components} />
      <h1 className="mullra__header">My Components</h1>
      <ul>
        {components.map((component, index) => (
          <li key={`component-${index}`}>{component.title}</li>
        ))}
      </ul>
      <CarouselComponent />
    </main>
  );
}
