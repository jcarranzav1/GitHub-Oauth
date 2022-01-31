import { makeStyles } from '@material-ui/core';
// dsasd
export const useHomeStyle = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    fontFamily: 'Arial',
  },
  buttonLogout: {
    all: 'unset',
    width: '100px',
    height: '35px',
    margin: '10px 10px 0 0',
    alignSelf: 'flex-end',
    backgroundColor: '#0041C2',
    color: '#fff',
    textAlign: 'center',
    borderRadius: '3px',
    border: '1px solid #0041C2',
    '&:hover': {
      backgroundcolor: '#fff',
      color: '#0041C2',
    },
  },
  wrapper: {
    height: '100%',
    width: '100%',
    display: 'flex',
    fontSize: '18px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 100px',
    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.2)',
    width: 'auto',
    '& img': {
      height: '150px',
      width: '150px',
      borderRadius: '50%',
    },
    'span:nth-child(2)': {
      marginTop: ' 20px',
      fontWeight: 'bold',
    },
    'span:not(:nth-child(2))': {
      marginTop: ' 8px',
      fontSize: '14px',
    },
  },
});
