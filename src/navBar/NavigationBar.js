import React from "react";
import { BranchesOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
export default function NavigationBar(props) {
  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark"
      style={{ backgroundColor: "#1a001a" }}
    >
      <Link className="navbar-brand" to="/">
        <BranchesOutlined />
        Torrent
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="nav nav-pills mr-auto"></ul>
        <div className="form-inline my-2 mx-auto my-lg-0">{props.children}</div>
      </div>
      <button
        className="navbar-toggler ml-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>
  );
}
