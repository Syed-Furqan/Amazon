import './App.css';
import Home from "./Home"
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {

  const [, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("USER: ", authUser);
      if(authUser) {
        dispatch({
          type: 'SET USER',
          user: authUser
        });
      } else {
        dispatch({
          type: 'SET USER',
          user: null
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            < Header />
            < Home />
          </Route>
          <Route path="/login">
            < Login />
          </Route>
          <Route path="/checkout">
            < Header />
            < Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;