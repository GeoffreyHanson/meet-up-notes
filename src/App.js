import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <Router>
      <div>
        {/* Here be components */}
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
