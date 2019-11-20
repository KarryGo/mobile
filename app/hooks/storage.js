import {useContext} from 'react';
import {AppStorage} from '../storage';

const useStorage = () => {
  const storage = useContext(AppStorage);
  return storage;
};

export default useStorage;
