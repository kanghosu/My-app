import styled from "styled-components";

const Tab = styled.button`
  color: ${(props) => (props.active ? "blue" : "black")};
`;

export default Tab;
