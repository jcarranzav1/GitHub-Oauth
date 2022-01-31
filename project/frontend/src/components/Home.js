import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from '../store/store';
import { types } from '../types/types';
import { useHomeStyle } from './home-style';
import axios from 'axios';
import { signOut } from '../api/userGitHub';

export const Home = () => {
	const state = useSelector();
	const dispatch = useDispatch();
	const classes = useHomeStyle();
	const navigate = useNavigate();
	if (!state.isLogging) {
		return <Navigate to="/login" />;
	}

	const { avatar_url, name, public_repos, followers, following } = state.user;
	console.log(state);

	const handleLogout = async () => {
		await signOut();
		dispatch({
			type: types.logout,
		});
		navigate('/login');
	};
	return (
		<div className={classes.container}>
			<button
				className={classes.buttonLogout}
				onClick={() => handleLogout()}>
				Logout
			</button>
			<div className={classes.wrapper}>
				<div className={classes.content}>
					<img src={avatar_url} alt="Avatar" />
					<span>{name}</span>
					<span>{public_repos} Repos</span>
					<span>{followers} Followers</span>
					<span>{following} Following</span>
				</div>
			</div>
		</div>
	);
};
