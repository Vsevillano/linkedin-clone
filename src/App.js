import React, { useState } from 'react';

import './App.css';
import { Feed } from './components/Feed';
import { Header } from './components/Header';
import { Login } from './components/Login';
import { Sidebar } from './components/Sidebar';
import { Widgets } from './components/Widgets';
import {selectUser} from './features/useSlice';
import {useSelector, useDispatch} from 'react-redux';

function App() {

  const user = useSelector(selectUser);


  return (
    <div className="App">
      

      {
        user ? (
          <>
          <Header/>
          <div className='wrapper'>
            <Sidebar/>
            <Feed/>
            <Widgets/>
          </div>
          </>
        ) : (
          <Login />
        )
        
      }

      
    </div>
  );
}

export default App;
