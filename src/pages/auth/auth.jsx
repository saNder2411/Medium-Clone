import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import Errors from '../../components/errors/errors';

const LOGIN_PATH = `/login`;

const Auth = ({path, username, email, password, loading, isSuccessFullSubmit, error, setUsername, setEmail, setPassword, onFormSubmit}) => {
  const isLoginPage = path === LOGIN_PATH;
  const titlePage = isLoginPage ? `Sign In` : `Sign Up`;
  const pathLink = isLoginPage ? `/register` : `/login`;
  const labelLink = isLoginPage ? `Need an account?` : `Have an account?`;
  const usernameField = isLoginPage ? null : (
    <fieldset className="form-group">
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Username"
        autoComplete="username"
        value={username}
        onChange={(evt) => setUsername(evt.target.value)} />
    </fieldset>
  );
  const errorMessage = error ? <Errors errors={error.errors} /> : null;

  if (isSuccessFullSubmit) {
    return <Redirect to="/" />;
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">{titlePage}</h1>
            <p className="text-xs-center">
              <Link to={pathLink}>{labelLink}</Link>
            </p>
            <form onSubmit={onFormSubmit}>
              {errorMessage}
              <fieldset>
                {usernameField}
                <fieldset className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    autoComplete="username"
                    value={email}
                    onChange={(evt) => setEmail(evt.target.value)} />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(evt) => setPassword(evt.target.value)} />
                </fieldset>
                <button
                  type="submit"
                  className="btn btn-lg btn-primary pull-xs-right"
                  disabled={loading}>
                  {titlePage}
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
