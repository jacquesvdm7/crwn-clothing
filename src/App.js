import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './components/shop/shop.component';
import Header from './components/header/header-component';
import Security from './components/security/security.component';


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={Security}/>
      </Switch>
    </div>
  );
}

export default App;
