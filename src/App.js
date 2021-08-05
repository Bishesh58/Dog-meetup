import "./App.css";
import Header from "./Component/Header";
import Banner from "./Component/Banner";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Login from "./Component/Login";
import Register from "./Component/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact>
            <Home />
          </Route>
          <Route path="/about" component={About} exact>
            <About />
          </Route>
          <Route path="/contact" component={Contact} exact>
            <Contact />
          </Route>
          <Route path="/login" component={Login} exact>
            <Login />
          </Route>
          <Route path="/register" component={Register} exact>
            <Register />
          </Route>
        </Switch>
      </Router>
      <div className="app__body">
        {/* <Banner /> */}
      </div>
    </div>
  );
}

export default App;
