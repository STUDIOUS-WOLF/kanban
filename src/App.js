
import './App.css';
import React from 'react';
import AppContainer from './component/AppContainer/AppContainer';
import Navbar from './component/Navbar/Navbar';
import Header from './component/Header/Header';
import Divider from '././icons/divider.svg'
import SubHeader from './component/SubHeader/SubHeader';
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
function App() {
  return (
    <DndProvider backend={HTML5Backend}>
    <div className="App">
      <Navbar/>
      <img className="divider" src={Divider}/>
      <Header/>
      <SubHeader/>
     <AppContainer/>
    </div>
    </DndProvider>
  );
}

export default App;
