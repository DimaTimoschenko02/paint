import React from 'react';
import SettingBar from './component/SettingBar';
import ToolBar from './component/ToolBar';
import Canvas from './component/Canvas'
import './style/app.scss'

function App() {
  return (
    <div className="app">
      <ToolBar/>
      <SettingBar/>
      <Canvas />
    </div>
  );
}

export default App;
