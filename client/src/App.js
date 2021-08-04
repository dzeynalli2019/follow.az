import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ Homepage } />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
