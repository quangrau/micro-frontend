import React from "react";
// import PropTypes from "prop-types";

function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <section>
        <form>
          <input name="username" />
          <input name="password" type="password" />
          <button type="submit">Login</button>
        </form>
      </section>
    </div>
  );
}

Login.propTypes = {};

export default Login;
