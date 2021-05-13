import React from 'react';
import { useTheater } from '../../context/TheaterContext';
import { useCurrentTheater } from '../../context/CurrentMoviesContext';

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
	const [theatersList, theaterLoading] = useTheater();
	const [currentTheater, setCurrentTheater] = useCurrentTheater();

	const changeCurrentTheater = theaterId => {
		const selectedTheaterArray = theatersList.filter(
			theater => theater.id === theaterId
		);
		setCurrentTheater(selectedTheaterArray[0]);
	};

	return (
		<div className={classes.root}>
			{theaterLoading ? (
				<ButtonGroup
					size='large'
					color='primary'
					orientation={matches ? 'horizontal' : 'vertical'}
					fullWidth
				>
					<Button key={1}>Loading..</Button>
					<Button key={2}>Loading..</Button>
					<Button key={3}>Loading..</Button>
				</ButtonGroup>
			) : (
				<ButtonGroup
					size='large'
					color='primary'
					orientation={matches ? 'horizontal' : 'vertical'}
					fullWidth
				>
					{theatersList.map(theater => (
						<Button
							key={theater.id}
							onClick={() => changeCurrentTheater(theater.id)}
						>
							{theater.name}
						</Button>
					))}
				</ButtonGroup>
			)}
		</div>
	);
}
