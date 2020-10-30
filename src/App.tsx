import React, { useEffect, useState } from 'react';
import { getData } from './service/service';
import TopBar from './components/TopBar';
import DeatailsDialog from './components/DetailsDialog';
import PokemonsList from './components/PokemonsList';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import NavSection from './components/NavSection';

const useStyles = makeStyles({
	root: {
		margin: 'auto',
		width: '100%',
		minHeight: '101vh',
	},
	spinner: {
		margin: 'auto',
	},
	dialog: {
		padding: '20px',
		'&::-webkit-scrollbar': {
			width: '0',
		},
	},
	dialogAvatar: {
		width: '80px',
		padding: '30px',
		height: '80px',
		margin: 'auto',
	},
});

function App() {
	const classes = useStyles();
	const [state, setState] = useState<State | null>(null);
	const [dialog, setDialog] = useState<boolean>(false);
	const [dialogData, setDialogData] = useState<PokemonDetails | undefined>();

	useEffect(() => {
		getData('https://pokeapi.co/api/v2/pokemon').then((res: State) => {
			setState(res);
		});
	}, []);

	const goToNext = async (): Promise<void> => {
		setState(null);
		if (state!.next !== null) {
			getData(state!.next).then((res: State) => {
				setState(res);
			});
		}
	};

	const goToPrev = (): void => {
		setState(null);
		if (state!.previous !== null) {
			getData(state!.previous).then((res: State) => {
				setState(res);
			});
		}
	};

	const showDetails = (pokemon: PokemonDetails): void => {
		setDialogData(pokemon);
		setDialog(true);
	};

	return (
		<div className={classes.root}>
			<TopBar />

			{!state && <LinearProgress className={classes.spinner} variant="indeterminate" />}

			<NavSection state={state} goToPrev={goToPrev} goToNext={goToNext} />

			<PokemonsList state={state} showDetails={showDetails} />

			<DeatailsDialog dialogData={dialogData} dialog={dialog} setDialog={setDialog} />
		</div>
	);
}

export default App;
