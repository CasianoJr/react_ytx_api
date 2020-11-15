import React from 'react';
import SearchForNavBar from './SearchForNavBar';
import FrameForNavBar from './FrameForNavBar';


export default function NavigationBar() {
  return (
    <>
      <FrameForNavBar>
        <ul className="nav nav-pills mr-auto">
          {/* <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li> */}
        </ul>
        <div className="form-inline my-2 mx-auto my-lg-0">
          <SearchForNavBar />
        </div>
      </FrameForNavBar>
    </>
  )
}


