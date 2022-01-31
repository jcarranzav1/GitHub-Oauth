import { makeStyles } from '@material-ui/core';

export const useLoginStyle = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Arial',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.2)',
    transition: '0.3s',
    width: '25%',
    height: '45%',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  span1: {
    fontSize: '1.1rem',
    color: '#808080',
    marginBottom: '70px',
  },
  span2: {
    margin: '10px 0 20px',
    color: 'red',
  },

  loginLink: {
    textDecoration: 'none',
    color: '#fff',
    textTransform: 'uppercase',
    cursor: 'default',
    display: 'flex',
    alignItems: 'center',
    height: '40px',
    '& span:nth-child(2)': {
      marginLeft: '5px',
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40px',
  },
  loader: {
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #3498db',
    borderRadius: '50%',
    width: '12px',
    height: '12px',
    animation: `$spin 2s linear infinite`,
  },
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
});
