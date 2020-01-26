import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { INIT_COMPONENTS } from "./store/component/types";

import Sidebar from "./components/sidebar";
import CarouselComponent from "./components/carousel-component";

const Container = styled.div`
  display: flex;
  height: 100vh;
  margin-bottom: 32px;
  font-family: "Trebuchet MS", Helvetica, sans-serif;
`;

const Main = styled.main`
  padding: 16px;
  overflow: hidden;
`;

const Header = styled.h1`
  margin: 0 0 32px 0;
  text-align: center;
`;

export default function App() {
  const components = useSelector(state => state.components.components);
  const dispatch = useDispatch();

  React.useEffect(() => {
    fetch("/components")
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: INIT_COMPONENTS,
          components: [...components, ...data],
        }),
      );
  }, []);

  const carouselComponent = components.find(
    component => component.type === "carousel",
  );

  return (
    <Container>
      <Sidebar />
      <Main>
        <Header>Mullra Design System</Header>
        {carouselComponent && carouselComponent.active && <CarouselComponent />}
      </Main>
    </Container>
  );
}
