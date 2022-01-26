import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './components/shop/shop.component';
import Header from './components/header/header-component';
import Security from './components/security/security.component';
import { auth } from './firebase/firebase-utils';


class App extends Component {
constructor()  {
  super();
  this.state = {
    currentUser: null
  }
}

unSubscribeFromAuth = null;


componentDidMount() {
  this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
    this.setState({currentUser: user});
    console.log(user);
  })
    
}

componentWillUnmount() {
  // This will close the google login subscription
  this.unSubscribeFromAuth();

}

render() {
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={Security}/>
      </Switch>
    </div>
  )};
}

export default App;
