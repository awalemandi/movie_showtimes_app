import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SearchBar from '../SearchBar/SearchBar';

const useStyles = makeStyles(theme => ({
	root: {
		height: '100%',
		width: '100%',
	},
	search: {
		marginTop: theme.spacing(2),
		borderRadius: theme.shape.borderRadius,
		backgroundColor: theme.palette.secondary.light,
	},
}));

function Home() {
	const classes = useStyles();
	return (
		<Grid
			container
			direction='row'
			justify='space-evenly'
			alignItems='center'
			spacing={1}
			className={classes.root}
		>
			<Grid item xs={12} md={10} lg={8} xl={7} className={classes.search}>
				<SearchBar />
			</Grid>
			<Grid item xs={12} md={10} lg={8} xl={7}>
				<SearchBar />
			</Grid>
			<Grid item xs={12} md={10} lg={8} xl={7}>
				<SearchBar />
			</Grid>
		</Grid>
	);
}

export default Home;
