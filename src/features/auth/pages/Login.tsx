import { useAppDispatch, useAppSelector } from 'app/hooks';
import React from 'react';
import { useState, useEffect } from 'react';
import { authActions, selectAuth } from '../authSlice';
import { Redirect } from 'react-router';

export interface LoginProps {}

export default function Login(props: LoginProps) {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { logging, isLoggedIn, message } = useAppSelector(selectAuth);
  const handleLoginClick = () => {
    dispatch(
      authActions.login({
        username,
        password,
      })
    );
  };
  useEffect(() => {
    if (logging) return;

    if (!isLoggedIn && message) alert(message);
  }, [logging]);

  if (isLoggedIn) return <Redirect to="/admin" />;

  return (
    <div>
      <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
}
