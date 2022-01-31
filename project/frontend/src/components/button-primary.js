import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import React from 'react';

const buttonStyles = makeStyles({
	default: {
		// background: theme.palette.primary.main,
		borderRadius: '20px !important',
		color: 'white !important',
		fontWeight: 'bold !important',
		alignItems: 'center !important',
		whiteSpace: 'normal !important',
		backgroundColor: '#000 !important',
		textTransform: 'none !important',
		fontSize: '15px !important',
		border: '1px solid transparent !important',
		outline: 'none !important',
		padding: '10px !important',
		'&:hover': {
			cursor: 'pointer !important',
		},
		'& .MuiTypography-caption': {
			lineHeight: 'inherit !important ',
		},
		'& .MuiButton-startIcon': {
			marginLeft: '0px !important',
		},
	},
	small: {
		borderRadius: '15px',
		lineHeight: '1.1',
		height: '30px',
		padding: '0px 10px',
		boxShadow:
			'0px 2px 5px 0px rgba(0,0,0,0.25), inset 0 1px 0 0 hsl(0deg 0% 100% / 40%)',
	},
	medium: {
		borderRadius: '20px',
		lineHeight: '1.1',
		height: '45px',
		padding: '0px 20px',
		boxShadow:
			'0px 4px 5px 0px rgba(0,0,0,0.25), inset 0 1px 0 0 hsl(0deg 0% 100% / 40%)',
	},
	large: {
		borderRadius: '30px',
		lineHeight: '1.1',
		height: '60px',
		padding: '0px 30px',
		boxShadow:
			'0px 6px 5px 0px rgba(0,0,0,0.25), inset 0 1px 0 0 hsl(0deg 0% 100% / 40%)',
	},
	extraLarge: {
		borderRadius: '35px',
		lineHeight: '1.1',
		height: '80px',
		padding: '0px 40px',
		boxShadow:
			'0px 8px 5px 0px rgba(0,0,0,0.25), inset 0 1px 0 0 hsl(0deg 0% 100% / 40%)',
	},
});
const ButtonPrimary = ({
	children,
	size = 'medium',
	type = 'button',
	disabled = false,
	color = 'primary', //
	...others
}) => {
	const classes = buttonStyles();
	return (
		<Button
			className={`${classes.default} ${classes[size]} `}
			disabled={disabled}
			type={type}
			{...others}>
			{children}
		</Button>
	);
};
export default ButtonPrimary;
