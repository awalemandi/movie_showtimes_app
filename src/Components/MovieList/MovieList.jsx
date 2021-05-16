import React, { useState, useEffect } from 'react';
import { useSearch } from '../../context/SearchContext';
import { useMovie } from '../../context/MovieContext';
import { useCurrentMovies } from '../../context/CurrentMoviesContext';
import { useCurrentTheater } from '../../context/CurrentMoviesContext';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import MovieCard from '../MovieCard/MovieCard';

const useStyles = makeStyles(theme => ({
	list: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		minHeight: '50rem',
	},
}));

function MovieList() {
	const classes = useStyles();
	const [searchField, setSearchField] = useSearch();
	const [movies, moviesLoading] = useMovie();
	const [currentTheater, setCurrentTheater] = useCurrentTheater();
	const [currentMovies, setCurrentMovies] = useCurrentMovies();
	const [filteredMovies, setFilteredMovies] = useState([]);
	const [movieTimes, setMovieTimes] = useState({});

	//Return specific movie details based on movie id provided
	const getMovieInfo = movieId => {
		const movieArray = movies.filter(item => item.id === movieId);
		return movieArray[0];
	};

	useEffect(() => {
		try {
			const getMoviesByTheater = () => {
				if (currentTheater) {
					//Get all movies available at current theater
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

	useEffect(() => {
		if (currentTheater) {
			const movieShowTimes = currentTheater['showtimes'];
			setMovieTimes(movieShowTimes);
		}
	}, [currentTheater]);

	//filter the current movies by matching with search field
	useEffect(() => {
		setFilteredMovies(
			currentMovies.filter(movie =>
				movie.title.toLowerCase().includes(searchField.toLowerCase())
			)
		);
	}, [searchField, currentMovies]);

	return moviesLoading ? (
		<div className={classes.list}>Loading...</div>
	) : (
		<div className={classes.list}>
			{!filteredMovies ? (
				<Typography variant='h10'>Could not find any movies :/</Typography>
			) : (
				filteredMovies.map(movie => (
					<MovieCard
						key={movie.id}
						title={movie.title}
						rating={movie.rating}
						posterUrl={movie.poster}
						times={movieTimes[movie.id]}
					/>
				))
			)}
		</div>
	);
}

export default MovieList;
