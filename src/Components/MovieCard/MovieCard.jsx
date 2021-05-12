import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		margin: theme.spacing(1),
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
	},
	content: {
		flex: '1 0 auto',
	},
	cover: {
		width: 200,
	},
	times: {
		display: 'flex',
		alignItems: 'center',
		paddingLeft: theme.spacing(1),
		paddingBottom: theme.spacing(1),
	},
	playIcon: {
		height: 38,
		width: 38,
	},
}));

export default function MediaControlCard() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<Card className={classes.root}>
			<CardMedia
				className={classes.cover}
				image='/static/images/cards/live-from-space.jpg'
				title='Live from space album cover'
			/>
			<div className={classes.details}>
				<CardContent className={classes.content}>
					<Typography component='h5' variant='h5'>
						Live From Space
					</Typography>
					<Typography variant='subtitle1' color='textSecondary'>
						Mac Miller
					</Typography>
				</CardContent>
				<div className={classes.times}>
					<Typography variant='subtitle1' color='textSecondary'>
						13:00
					</Typography>
				</div>
			</div>
		</Card>
	);
}
