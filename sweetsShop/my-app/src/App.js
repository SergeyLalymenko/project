import React, { useState, useEffect } from 'react'
import theme from './theme'
import { ThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import StickersList from './components/StickersList/StickersList'
import CartList from './components/CartList/CartList'
import Sticker from './components/Sticker/Sticker'
import Footer from './components/Footer/Footer'
import ThanksForOrder from './components/ThanksForOrder/ThanksForOrder'
import { Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom'
import './App.css'



function App() {

  const [sidebarOpened, setSidebarOpened] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const createdTheme = theme(darkMode);

  useEffect(checkUserMode, []);

  function toggleSidebar(){
    setSidebarOpened(!sidebarOpened);
  }

  function toggleTheme(){
    darkMode ? setMode(false) : setMode(true)
  }

  function checkUserMode(){
    const isDarkMode = localStorage.getItem('darkMode');
    switch(isDarkMode){
      case 'true': setMode(true); break;
      case 'false': setMode(false); break;
      default: localStorage.setItem('darkMode', false); break;
    }
  }

  function setMode(boolean){
    localStorage.setItem('darkMode', boolean);
    setDarkMode(boolean);
  }

  return (
    <Router>
      <ThemeProvider theme={createdTheme}>
        <CssBaseline/>
          <div className="main">
            <Header toggleSidebar={toggleSidebar} onToggleThemeClick={toggleTheme}/>
            <Sidebar sidebarOpened={sidebarOpened} toggleSidebar={toggleSidebar}/>
            <Switch>
              <Route path="/item/:id">
                <Sticker/>
              </Route>
              <Route path="/main/:type">
                <StickersList/>
              </Route>
              <Route path="/cart">
                <CartList/>
              </Route>
              <Route path="/order">
                <ThanksForOrder/>
              </Route>
              <Route path="*">
                <Redirect to="/main/best"></Redirect>
              </Route>
            </Switch>
          </div>
          <div className="footer">
            <Footer/>
          </div>
      </ThemeProvider>
    </Router>
  );
}

export default App