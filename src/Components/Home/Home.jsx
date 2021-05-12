import React from 'react';
import useFetchData from '../../hooks/useFetchData';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SearchBar from '../SearchBar/SearchBar';
import TheaterButtons from '../TheaterButtons/TheaterButtons';
import MovieList from '../MovieList/MovieList';

const useStyles = makeStyles(theme => ({
	root: {
		height: '100%',
		width: '100%',
		padidng: theme.spacing(10, 5),
	},
	search: {
		marginTop: theme.spacing(2),
		borderRadius: theme.shape.borderRadius,
		textAlign: 'center',
	},
	selection: {
		width: '60%',
	},
}));

function Home() {
	const classes = useStyles();
	const [movieLoading, movieResponse, movieError] = useFetchData('/api/movies');
	const [theaterLoading, theaterResponse, theaterError] = useFetchData(
		'/api/theaters'
	);

	return (
		<Grid
			container
			direction='row'
			justify='space-evenly'
			alignItems='center'
			spacing={1}
			className={classes.root}
		>
			{console.log(theaterResponse)}
			<Grid item xs={12} md={10} lg={8} xl={7} className={classes.search}>
				<SearchBar />
			</Grid>
			<Grid item xs={12} md={10} lg={8} xl={7} className={classes.selection}>
				<TheaterButtons />
			</Grid>
			<Grid item xs={12} md={10} lg={8} xl={7}>
				<MovieList />
			</Grid>
		</Grid>
	);
}

export default Home;
