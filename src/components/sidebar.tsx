import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Component, SET_ACTIVE_COMPONENT } from "../store/component/types";

interface SidebarProps {
  components: Component[];
}

const SidebarUl = styled.ul`
  width: 150px;
  max-height: 100%;
  margin: 0;
  padding: 16px;
  background-color: #dc7970;
  color: #fff;
  list-style-type: none;
  cursor: pointer;
`;

export default () => {
  const components = useSelector(state => state.components.components);
  const dispatch = useDispatch();

  return (
    <SidebarUl>
      {components.map((component, index) => (
        <li
          key={`component-${index}`}
          onClick={() =>
            dispatch({
              type: SET_ACTIVE_COMPONENT,
              componentType: component.type,
            })
          }
        >
          {component.name}
        </li>
      ))}
    </SidebarUl>
  );
};
