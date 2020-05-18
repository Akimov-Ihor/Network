import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
// import Dialogs from './components/Dialogs/Dialogs';
import News from './components/Navbar/News/News';
import Music from './components/Music/Music';
import Settings from './components/Navbar/Settings/Settings';
// import Friends from './components/Navbar/Friends/Friends'
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';



const App = (props) => {
  console.log(props)
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar store={props.store} />
        <div className="app-wrapper-content">
          <Route path='/dialogs'
            render={() => <DialogsContainer />} />
          <Route path='/profile'
            render={() => <Profile />} />
          <Route path='/news' render={News} />
          <Route path='/music' render={Music} />
          <Route path='/settings' render={Settings} />
        </div>
      </div>

    </BrowserRouter>);


}


export default App;
