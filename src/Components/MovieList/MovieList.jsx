import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import MovieCard from '../MovieCard/MovieCard';

const useStyles = makeStyles(theme => ({
	list: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
}));

function MovieList() {
	const classes = useStyles();
	return (
		<div className={classes.list}>
			<MovieCard />
			<MovieCard />
			<MovieCard />
			<MovieCard />
			<MovieCard />
		</div>
	);
}

export default MovieList;
