import * as React from "react";
import styled from "styled-components";
import { Component } from "../types";

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
`;

export default class Sidebar extends React.Component<SidebarProps> {
  public render() {
    return (
      <SidebarUl>
        {this.props.components.map((component, index) => (
          <li key={`component-${index}`}>{component.name}</li>
        ))}
      </SidebarUl>
    );
  }
}
