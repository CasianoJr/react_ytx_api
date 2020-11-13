import React from 'react';
import { BranchesOutlined } from '@ant-design/icons';


export default function FrameForNavBar(props) {

    return (
        <nav className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: "#1a001a" }} >
            <a className="navbar-brand" href="/"> <BranchesOutlined />Torrent </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {props.children}
            </div>
            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </nav>
    )
}


