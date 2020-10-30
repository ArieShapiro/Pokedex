import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
			margin: '0 10px',
		},
		titleIcon: {
			margin: '0 10px',
			fontSize: '1em',
		},
	})
);

export interface TopBarProps {}

const TopBar: React.FC<TopBarProps> = () => {
    const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h4" className={classes.title} align="center">
						<FlashOnIcon className={classes.titleIcon} />
						Pokedex
						<FlashOnIcon className={classes.titleIcon} />
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default TopBar;
