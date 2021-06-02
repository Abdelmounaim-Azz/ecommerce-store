import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import ShopPage from './pages/shop/shop.component';
import Auth from './pages/auth/auth.component';
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/shop">
                <ShopPage />
              </Route>
              <Route exact path="/signin">
                <Auth />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
