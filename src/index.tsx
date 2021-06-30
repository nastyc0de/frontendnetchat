import {render}from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

render(
  <Router>
    <Route exact path="/" component={App}/>
    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>
    
  </Router>,
  document.getElementById('root')
);