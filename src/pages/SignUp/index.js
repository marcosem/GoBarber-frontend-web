import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <form>
        <input placeholder="Full Name" />
        <input type="email" placeholder="Your e-mail" />
        <input type="password" placeholder="Password" />
        <button type="submit">Create Account</button>
        <Link to="/">Already have an account</Link>
      </form>
    </>
  );
}
