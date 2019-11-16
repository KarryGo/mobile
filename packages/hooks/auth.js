import {useState, useEffect} from 'react';
import useStorage from './storage';

const useAuth = () => {
  const storage = useStorage();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const store = await storage.get();
      setUser(store.user);
      setLoading(false);
    };
    getUser();
  }, [storage]);

  return [user, loading];
};

export default useAuth;
