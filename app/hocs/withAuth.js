import React, {useEffect} from 'react';
import useAuth from '../hooks/auth';

const withAuth = Component => props => {
  const [user, loading] = useAuth();
  useEffect(() => {
    if (!loading && !user) {
      props.navigation.replace('Register');
    }
  });

  if (loading) {
    return null;
  }

  return <Component {...props} />;
};

export default withAuth;
