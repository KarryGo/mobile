import {useState, useEffect} from 'react';
import useStorage from './storage';

const useAuth = () => {
  const storage = useStorage();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const savedUser = await storage.get('user');
      setUser(savedUser);
      setLoading(false);
    };
    getUser();
  }, [storage]);

  return [user, loading];
};

export default useAuth;
