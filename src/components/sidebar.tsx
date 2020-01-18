import * as React from "react";
import styled from "styled-components";

const Sidebar = styled.ul`
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

export default props => <Sidebar></Sidebar>;
