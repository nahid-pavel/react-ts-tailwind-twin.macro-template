import React from "react";

import "./styles/output.css";
import tw from "twin.macro";
import styled from "styled-components";
const MyCoponent = styled.div`
  ${tw`h-10 bg-blue-400`}
`;

function App() {
  return <MyCoponent>Hello World</MyCoponent>;
}

export default App;
