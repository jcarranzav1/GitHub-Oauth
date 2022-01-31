import { useEffect, useState } from 'react';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from '../store/store';
import { types } from '../types/types';
import { useLoginStyle } from './login-style';
import ButtonPrimary from './button-primary';
import { signIn } from '../api/userGitHub';
import { GITHUB_CLIENT_ID, GITHUB_REDIRECT_URI } from '../api/consts';

const path = '/home';

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const classes = useLoginStyle();

  useEffect(() => {
    const getUser = async () => {
      try {
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

          navigate('/home');
        }
      } catch (err) {
        setError('Sorry! Login failed');
      }
    };
    getUser();
  }, [dispatch, navigate]);

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
}
