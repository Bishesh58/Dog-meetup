import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Login from './Component/Login';
import Register from './Component/Register';
import Footer from './Component/Footer';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Profile from './Component/Profile';
import DogProfile from './Component/DogProfile';
import EventHistory from './Component/EventHistory';
import { useSelector } from 'react-redux';

function App() {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__body">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} exact />
            <Route path="/contact" component={Contact} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/profile" component={()=> (!userInfo? <Login/> : <Redirect to="/profile"/>)} exact />
            <Route path="/dogs" component={()=> (!userInfo? <Login/> : <Redirect to="/dogs"/>)} exact />
            <Route path="/eventsHistory" component={()=> (!userInfo? <Login/> : <Redirect to="/eventHistory"/>)} exact />
            <Route path="/register" component={Register} exact />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
