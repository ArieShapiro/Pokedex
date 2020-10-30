import React, { useEffect, useState } from 'react';
import { getData } from './service/service';
import TopBar from './components/TopBar';
import DeatailsDialog from './components/DetailsDialog';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import LinearProgress from '@material-ui/core/LinearProgress';
import NavSection from './components/NavSection';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
	root: {
		margin: 'auto',
		width: '100%',
		minHeight: '101vh',
	},

	list: {
		width: '70%',
		margin: 'auto',
	},
	listItem: {
		margin: '5px 0',
		boxShadow: '1px 1px #888888',
		border: 'solid 1px #888888',
		borderRadius: '5px',
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

			{state ? (
				<List className={classes.list}>
					{state.pokemons.map((p: PokemonDetails) => (
						<ListItem className={classes.listItem} key={p.orderNumber}>
							<ListItemAvatar>
								<Avatar src={p.picture} />
							</ListItemAvatar>
							<ListItemText primary={p.name.toUpperCase()} />
							<ListItemSecondaryAction>
								<Button
									onClick={() => {
										showDetails(p);
									}}
								>
									View Details
								</Button>
							</ListItemSecondaryAction>
						</ListItem>
					))}
				</List>
			) : null}

			<DeatailsDialog dialogData={dialogData} dialog={dialog} setDialog={setDialog} />
		</div>
	);
}

export default App;
