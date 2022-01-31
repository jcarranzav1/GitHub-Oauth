import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from '../store/store';
import { types } from '../types/types';
import { useHomeStyle } from './home-style';

import { signOut } from '../api/userGitHub';

export function Home() {
  const state = useSelector();
  const dispatch = useDispatch();
  const classes = useHomeStyle();
  const navigate = useNavigate();
  if (!state.isLogging) {
    return <Navigate to="/login" />;
  }

  const {
    avatar_url: avatarURL,
    name,
    public_repos: publicRepos,
    followers,
    following,
  } = state.user;

  const handleLogout = async () => {
    await signOut();
    dispatch({
      type: types.logout,
    });
    navigate('/login');
  };
  return (
    <div className={classes.container}>
      <button className={classes.buttonLogout} onClick={() => handleLogout()} type="button">
        Logout
      </button>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <img alt="Avatar" src={avatarURL} />
          <span>{name}</span>
          <span>{publicRepos} Repos</span>
          <span>{followers} Followers</span>
          <span>{following} Following</span>
        </div>
      </div>
    </div>
  );
}
