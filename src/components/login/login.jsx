import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../common/footer';
import Header from '../common/header';
import { addUser } from '../../actions/user-action'
import './login.scss';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (username && password) {
         dispatch(addUser(username))
        history.push('/');
    }
  };

  return (
    <div className="row login">
      <Header showCartAndLoginInfo={false} />
      <div className="col-md-4 col-md-offset-4 login-top-spacing">
        <h2>Login</h2>
        <form name="form" onSubmit={handleSubmit}>
          <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={handleChange}
            />
            {submitted && !username && (
              <div className="help-block">Username is required</div>
            )}
          </div>
          <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={handleChange}
            />
            {submitted && !password && (
              <div className="help-block">Password is required</div>
            )}
          </div>
          <div className="form-group">
            <button className="btn login-btn">Login</button>
            <Link to="/register" className="btn btn-link green-link">
              Register
            </Link>
          </div>
        </form>
        <Footer />
      </div>
    </div>
  );
};

export default LoginPage;
