import React from 'react';

import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
	search: {
		display: 'inline-flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'stretch',
		height: '3rem',
		margin: theme.spacing(0),
		width: '20%',
		[theme.breakpoints.down('md')]: {
			width: '40%',
		},
		[theme.breakpoints.down('sm')]: {
			width: '70%',
		},
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.primary.main, 0.25),
		'&:hover': {
			backgroundColor: fade(theme.palette.primary.main, 0.35),
		},
	},
	searchIcon: {
		padding: theme.spacing(0),
		height: '100%',
		position: 'relative',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
	},
}));

function SearchBar() {
	const classes = useStyles();
	return (
		<div className={classes.search}>
			<div className={classes.searchIcon}>
				<SearchIcon />
			</div>
			<InputBase
				placeholder='Search Movies...'
				classes={{
					root: classes.inputRoot,
					input: classes.inputInput,
				}}
				inputProps={{ 'aria-label': 'search' }}
			/>
		</div>
	);
}

export default SearchBar;
