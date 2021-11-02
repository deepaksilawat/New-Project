import './App.css';
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import AllBooks from './components/AllBooks';
import Navbar from './components/Navbar';
import AddBook from './components/AddBook';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import BookDetails from './components/BookDetails';

function App() {
  return (
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={AllBooks} />
        <Route exact path="/addbook" component={AddBook} />
        <Route exact path="/book/:id" component={BookDetails} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
      </Router>
     
  );
}

export default App;
