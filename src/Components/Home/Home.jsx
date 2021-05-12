import React from 'react';

import {makeStyles} from '@material-ui/core/styles';

import SearchBar from '../SearchBar/SearchBar';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
}));

function Home() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<SearchBar />
		</div>
	);
}

export default Home;
