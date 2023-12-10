import { React, Component } from 'react';
import RegistrationForm from './component/RegistrationForm';
import LoginForm from './component/LoginForm';

import Home from './component/Home';

import { BrowserRouter as Router, Route,   Routes } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<RegistrationForm />} />
            <Route path='/signup' element={<RegistrationForm />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </div>
      </Router>
    );
  }
}


export default App;
