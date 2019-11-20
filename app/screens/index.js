import Home from './Home';
import Register from './Register';
import Login from './Login';
import withStorage from '../hocs/withStorage';

const screens = {
  Home: withStorage(Home),
  Register: withStorage(Register),
  Login: withStorage(Login),
};

export default screens;
