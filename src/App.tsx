import * as React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { INIT_COMPONENTS } from "./store/component/types";

import Sidebar from "./components/sidebar";
import CarouselComponent from "./components/carousel-component";

const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const Main = styled.main`
  padding: 16px;
`;

const Header = styled.h1`
  margin: 0;
  text-transform: uppercase;
`;

export default function App() {
  const components = useSelector(state => state.components.components);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({
      type: INIT_COMPONENTS,
      components: [
        ...components,
        ...[{ name: "component1" }, { name: "component2" }],
      ],
    });
  }, []);

  return (
    <Container>
      <Sidebar components={components} />
      <Main>
        <Header>My Components</Header>
        <ul>
          {components.map((component, index) => (
            <li key={`component-${index}`}>{component.title}</li>
          ))}
        </ul>
        <CarouselComponent />
      </Main>
    </Container>
  );
}
