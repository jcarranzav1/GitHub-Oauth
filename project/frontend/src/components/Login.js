import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from '../store/store';
import { types } from '../types/types';
import { useLoginStyle } from './login-style';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import ButtonPrimary from './button-primary';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../api/userGitHub';
import { GITHUB_CLIENT_ID, GITHUB_REDIRECT_URI } from '../api/consts';

const path = '/home';

export const Login = () => {
	const state = useSelector();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const classes = useLoginStyle();

	useEffect(() => {
		const getUser = async () => {
			try {
				setLoading(true);
				setError('');
				const { data } = await signIn();

				if (data) {
					const action = {
						type: types.login,
						payload: {
							user: data,
						},
					};
					dispatch(action);
					setLoading(false);
					navigate('/home');
				}
			} catch (err) {
				setError('Sorry! Login failed');
			}
		};
		getUser();
	}, []);

	return (
		<section className={classes.container}>
			<div className={classes.wrapper}>
				<h1 className={classes.title}>Welcome</h1>
				<span className={classes.span1}>Super amazing app</span>
				<span className={classes.span2}>{error}</span>
				<ButtonPrimary
					onClick={() => {
						setError('');
					}}
					startIcon={<GitHubIcon />}>
					<Link
						className={classes.loginLink}
						href={`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${GITHUB_REDIRECT_URI}?path=${path}&scope=user:email`}
						underline="none">
						Login with GitHub
					</Link>
				</ButtonPrimary>
			</div>
		</section>
	);
};
