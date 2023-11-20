import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import GlobalStyle from "./GlobalStyle";
import Tab from "./Tab";

function App() {
  const [activeTab, setActiveTab] = useState("artist");

  return (
    <Router>
      <GlobalStyle />
      <div>
        <Tab
          active={activeTab === "artist"}
          onClick={() => setActiveTab("artist")}
        >
          Artist
        </Tab>
        <Tab
          active={activeTab === "album"}
          onClick={() => setActiveTab("album")}
        >
          Album
        </Tab>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </Router>
  );
}

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import GlobalStyle from "./GlobalStyle";
import Tab from "./Tab";
import Header from "./Header";
import Banner from "./Banner";

function App() {
  const [activeTab, setActiveTab] = useState("artist");

  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
