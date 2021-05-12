import React from 'react';
import { useTheater } from '../../context/TheaterContext';

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
	const [theatersList, setTheatersList] = useTheater();

	return (
		<div className={classes.root}>
			<ButtonGroup
				size='large'
				color='primary'
				orientation={matches ? 'horizontal' : 'vertical'}
				fullWidth
			>
				{theatersList.map(theater => (
					<Button key={theater.id}>{theater.name}</Button>
				))}
			</ButtonGroup>
		</div>
	);
}
