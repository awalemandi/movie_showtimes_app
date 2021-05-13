import React, { useEffect } from 'react';
import { useMovie } from '../../context/MovieContext';
import { useCurrentMovies } from '../../context/CurrentMoviesContext';
import { useCurrentTheater } from '../../context/CurrentMoviesContext';
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
	const [movies, moviesLoading] = useMovie();
	const [currentTheater, setCurrentTheater] = useCurrentTheater();
	const [currentMovies, setCurrentMovies] = useCurrentMovies();

	const getMovieInfo = movieId => {
		const movieArray = movies.filter(item => item.id === movieId);
		return movieArray[0];
	};

	const getMovieTimes = movieId => {
		return Object.values(currentTheater['showtimes'][movieId]);
	};

	useEffect(() => {
		console.log('movies', movies);
		try {
			const getMoviesByTheater = () => {
				if (currentTheater) {
					console.log();
					const movieIdArray = Object.keys(currentTheater['showtimes']);
					const moviesByTheater = movieIdArray.map(id => getMovieInfo(id));
					setCurrentMovies(moviesByTheater);
				}
			};
			getMoviesByTheater();
		} catch (e) {
			console.log(e);
		}
	}, [currentTheater, movies]);

	return moviesLoading ? (
		<div className={classes.list}>Loading...</div>
	) : (
		<div className={classes.list}>
			{currentMovies.map(movie => (
				<MovieCard
					key={movie.id}
					title={movie.title}
					rating={movie.rating}
					posterUrl={movie.poster}
					times={getMovieTimes(movie.id)}
				/>
			))}
		</div>
	);
}

export default MovieList;
