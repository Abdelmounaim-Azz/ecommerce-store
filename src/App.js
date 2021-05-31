import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import ShopPage from './pages/shop/shop.component';
import Auth from './pages/auth/auth.component';
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    let unsubscribedFromAuth = null;
    unsubscribedFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          const userData = {
            id: snapshot.id,
            ...snapshot.data(),
          };
          setCurrentUser(userData);
        });
        console.log(currentUser);
      }
      setCurrentUser(userAuth);
    });
    return () => {
      unsubscribedFromAuth();
    };
  }, []);

  return (
    <Router>
      <div>
        <Header currentUser={currentUser} />
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
  );
}

export default App;
