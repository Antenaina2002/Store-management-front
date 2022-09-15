import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListProductComponent from './components/ListProductComponent';
import AddProductComponent from './components/AddProductComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className= "container">
          <Switch>
              <Route exact path = "/" component = {ListProductComponent}></Route>
              <Route path = "/Product" component = {ListProductComponent}></Route>
              <Route path = "/add-product" component = {AddProductComponent} ></Route>
              <Route path = "/edit-product/:id" component = {AddProductComponent}></Route>
            </Switch>
        </div>
        <FooterComponent />
        </Router>
    </div>
  );
}

export default App;
