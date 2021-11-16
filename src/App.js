import './App.css';
import Home from "./Home"
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <div className="app">
        < Header />
        <Switch>
        <Route exact path="/">
            < Home />
          </Route>
          <Route path="/checkout">
            < Checkout />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
