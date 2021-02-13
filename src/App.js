import './App.css';
import Home from './Home'
import Nav from './Nav';
import About from './About';
import Contact from './Contact';
import Faqs from './Faqs';
import Products from './Products';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/faqs" component={Faqs}/>
          <Route path="/products" component={Products}/>
        </Switch>
      </div>
    </Router>
  );
}




export default App;
