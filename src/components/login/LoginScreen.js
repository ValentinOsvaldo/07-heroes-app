import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { types } from '../../types/types';
import { AuthContext } from '../../auth/authContext';

const LoginScreen = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Osvaldo',
      },
    };
    
    dispatch( action );
    
    navigate('/', {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        login
      </button>
    </div>
  );
};

export default LoginScreen;
