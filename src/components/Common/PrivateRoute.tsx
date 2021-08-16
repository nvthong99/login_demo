import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { useAppSelector } from 'app/hooks';
import { selectAuth } from 'features/auth/authSlice';
export function PrivateRoute(props: RouteProps) {
  const { isLoggedIn } = useAppSelector(selectAuth);

  if (!isLoggedIn) return <Redirect to="/login" />;

  return <Route {...props} />;
}
