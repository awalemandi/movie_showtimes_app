import React from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));

export default function TheaterButtons() {
	const classes = useStyles();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<div className={classes.root}>
			<ButtonGroup
				size='large'
				color='primary'
				orientation={matches ? 'horizontal' : 'vertical'}
			>
				<Button>Theater 1</Button>
				<Button>THeater 2</Button>
				<Button>Theater 3</Button>
			</ButtonGroup>
		</div>
	);
}
