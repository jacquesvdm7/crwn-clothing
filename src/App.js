import React, { Component } from 'react';
//We import this to connect to our reducers
import { connect} from 'react-redux';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
// We added redirect to make sure after login the user can no longer access the logign page
import {Route, Switch, Redirect} from 'react-router-dom';
import ShopPage from './components/shop/shop.component';
import Header from './components/header/header-component';
import Security from './components/security/security.component';
import { auth, createUserProfileDocument } from './firebase/firebase-utils';
import { setCurrentUser } from './redux/user/user-actions';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';

import CheckOutPage from './pages/checkout/checkout.component';


class App extends Component {
unSubscribeFromAuth = null;

// Because we are calling a asynch process we have to mark it here as well
//Firstore document reference is used to perform the CRUD methods
//set, get, update, delete
componentDidMount() {

  const {setCurrentUser} = this.props;

  this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth)
    {
      const userRef = await createUserProfileDocument(userAuth);
      //check if any data changed in the process before
      userRef.onSnapshot(snapShot => {
        // const {name, email, createdDate} = snapShot.data();
        // console.log('name: ', name, 'email:', email,'date created:',createdDate);
        setCurrentUser ({
          id: snapShot.id,
          ...snapShot.data()
        },
        () => {console.log(this.state);}
        )
      })
    }
    setCurrentUser(userAuth);
    
  })
    
}

componentWillUnmount() {
  // This will close the google login subscription
  this.unSubscribeFromAuth();

}

render() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        {/* We are switching this to exact match as part of the process to ensure users can only signin once *
        we will redirect to root in current User have a value else with will render the sign in and sign up page */}
        <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to="/"/>) : (<Security/>)}/>
        <Route exact path='/checkout' component={CheckOutPage}/> 
      </Switch>
    </div>
  )};
  }

  // We want o destruct the user state from props to get the currentUser value, we will then pass the value to the first paramter of connect
  const mapStateToProps = createStructuredSelector (
    {
        currentUser: selectCurrentUser
    }
  )

  //This is how set properties on the reducer
const mapDispatchToProps = dispatch => (
  {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
