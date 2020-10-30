import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
	root: {
		margin: '10px auto',
		display: 'flex',
		justifyContent: 'space-around',
		width: '80%',
		textAlign:'center'
	},
});

export interface NavSectionProps {
	state: State | null;
	goToPrev: () => void;
	goToNext: () => void;
}

const NavSection: React.FC<NavSectionProps> = ({ state, goToPrev, goToNext }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			{state && (
				<>
					<IconButton onClick={goToPrev} color="primary">
						<ArrowBackIcon />
					</IconButton>
					<Typography variant="h5" color="textPrimary" style={{ width: '30%' }}>
						{`${state.pokemons[0].orderNumber} -
            
                        ${state.pokemons[state.pokemons.length - 1].orderNumber}
                        of ${state.count}
                       `}
					</Typography>
					<IconButton onClick={goToNext} color="primary">
						<ArrowForwardIcon />
					</IconButton>
				</>
			)}
		</div>
	);
};

export default NavSection;
