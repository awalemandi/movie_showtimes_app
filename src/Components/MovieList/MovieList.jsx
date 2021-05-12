import React from 'react';
import { useMovie } from '../../context/MovieContext';
import { useTheater} from '../../context/TheaterContext';
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


	const getTimes = id => {

	};

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
