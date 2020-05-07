import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/Navbar/News/News';
import Music from './components/Music/Music';
import Settings from './components/Navbar/Settings/Settings';
import { Route, BrowserRouter } from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div class="app-wrapper-content">
          <Route  path='/dialogs' render={()=><Dialogs messages={props.messages} dialogs={props.dialogs}/>}/>
          <Route  path='/profile' render={()=><Profile postData={props.postData}/>} />
          <Route  path='/news' render={News} />
          <Route  path='/music' render={Music} />
          <Route  path='/settings' render={Settings} />
        </div>
      </div>
    </BrowserRouter>);

}


export default App;
