import Home from './Home';
import Register from './Register';
import withStorage from '../hocs/withStorage';

const screens = {
  Home: {
    screen: withStorage(Home),
  },
  Register: {
    screen: withStorage(Register),
  },
};

export default screens;
