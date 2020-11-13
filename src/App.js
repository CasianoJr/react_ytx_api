import React from 'react';
import BackToTop from './components/BackToTop';
import MainLayout from './components/MainLayout';
import './bootstrap.min.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <div style={{ backgroundColor: "#020926" }}>
      <MainLayout />
      <BackToTop />
    </div>
  );
}

export default App;
