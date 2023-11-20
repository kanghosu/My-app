import React from "react";
import styled from "styled-components";
import Tab from "./Tab";

const HeaderContainer = styled.header`
  padding: 20px;
  background-color: #282c34;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-size: 1.5em;
`;

const Header = ({ activeTab, setActiveTab }) => {
  return (
    <HeaderContainer>
      <Logo>My App</Logo>
      <Tab
        active={activeTab === "artist"}
        onClick={() => setActiveTab("artist")}
      >
        Artist
      </Tab>
      <Tab active={activeTab === "album"} onClick={() => setActiveTab("album")}>
        Album
      </Tab>
    </HeaderContainer>
  );
};

export default Header;
