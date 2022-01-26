import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './components/shop/shop.component';
import Header from './components/header/header-component';
import Security from './components/security/security.component';
import { auth, createUserProfileDocument } from './firebase/firebase-utils';


class App extends Component {
constructor()  {
  super();
  this.state = {
    currentUser: null
  }
}

unSubscribeFromAuth = null;

// Because we are calling a asynch process we have to mark it here as well
//Firstore document reference is used to perform the CRUD methods
//set, get, update, delete
componentDidMount() {
  this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth)
    {
      const userRef = await createUserProfileDocument(userAuth);
      //check if any data changed in the process before
      userRef.onSnapshot(snapShot => {
        // const {name, email, createdDate} = snapShot.data();
        // console.log('name: ', name, 'email:', email,'date created:',createdDate);
        this.setState ({
          id: snapShot.id,
          ...snapShot.data()
        },
        () => {console.log(this.state);}
        )
        
      })
    }
    this.setState({currentUser: userAuth});
    
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
