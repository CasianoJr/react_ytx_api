import React from "react";
import "./bootstrap.min.css";
import "antd/dist/antd.css";
import SearchProvider from "./shared/SearchProvider";
import BackToTop from "./shared/BackToTop";
import NavigationBar from "./navBar/NavigationBar";
import NavSearch from "./navBar/NavSearch";
import SearchExpand from "./navBar/SearchExpand";
import { BrowserRouter } from "react-router-dom";
import Routes from "./shared/Routes";
import Spinner from "./shared/Spinner";

function App() {
  return (
    <div style={{ backgroundColor: "#020926" }}>
      <SearchProvider>
        <BrowserRouter>
          <NavigationBar>
            <NavSearch />
          </NavigationBar>
          <SearchExpand />
          <Spinner>
            <Routes />
          </Spinner>
          <BackToTop />
        </BrowserRouter>
      </SearchProvider>
    </div>
  );
}

export default App;
