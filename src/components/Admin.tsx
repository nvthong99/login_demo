import { useAppSelector } from 'app/hooks';
import { selectAuth } from 'features/auth/authSlice';
import * as React from 'react';
export interface AdminProps {}

export default function Admin(porps: AdminProps) {
  const { currentUser } = useAppSelector(selectAuth);

  return <div>Hello {currentUser.name} </div>;
}
