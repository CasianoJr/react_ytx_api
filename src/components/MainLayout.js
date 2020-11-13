import React, { useState } from 'react'
import NavigationBar from './NavigationBar'
import { SearchContext } from './SearchForNavBar';
import { Spin } from 'antd';
import ExpandedSearch from './ExpandedSearch';
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes';

export default function MainLayout() {
    const [state, setState] = useState({ searchLoading: true });
    return (
        <BrowserRouter>
            <SearchContext.Provider value={{ state, setState }}>
                <NavigationBar />
                <ExpandedSearch />
                <Spin spinning={state.searchLoading} delay={100}>
                    <Routes />
                </Spin>
            </SearchContext.Provider>
        </BrowserRouter>
    )
}
