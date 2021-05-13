import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		width: '25rem',
		margin: theme.spacing(1),
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			width: '15rem',
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
		width: '50%',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			height: '20rem',
		},
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

export default function MovieCard({ id, title, rating, posterUrl, times }) {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<CardMedia className={classes.cover} image={posterUrl} title={title} />
			<div className={classes.details}>
				<CardContent className={classes.content}>
					<Typography component='h5' variant='h5'>
						{title}
					</Typography>
					<Typography variant='body1' color='textSecondary'>
						({rating})
					</Typography>
				</CardContent>
				<div className={classes.times}>
					{times.map(time => (
						<Typography
							variant='subtitle1'
							color='textSecondary'
							key={Math.random() * 999}
						>
							{time}
						</Typography>
					))}
				</div>
			</div>
		</Card>
	);
}
