import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Login from './Component/Login';
import Register from './Component/Register';
import Footer from './Component/Footer';
import Dogs from './Component/DogProfile'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './Component/Profile';
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
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About} exact />
            <Route path="/contact" component={Contact} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/profile" component={()=> (!userInfo? <Login/> : <Profile/>)} />
            <Route path="/dogs" component={()=> (!userInfo? <Login/> : <Dogs/>)} />
            <Route path="/eventsHistory" component={()=> (!userInfo? <Login/> : <EventHistory/>)} />
            <Route path="/register" component={Register} exact />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
