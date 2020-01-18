import * as React from "react";
import styled from "styled-components";
import { Component } from "../types";

const SidebarUl = styled.ul`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 150px;
  margin: 0;
  padding: 16px;
  background-color: #dc7970;
  color: #fff;
  list-style-type: none;
`;

interface SidebarProps {
  components: Component[];
}

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
