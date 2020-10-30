import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	list: {
		width: '70%',
		margin: 'auto',
	},
	listItem: {
		margin: '5px 0',
		boxShadow: '1px 1px #b6beec',
		border: 'solid 1px #b6beec',
		borderRadius: '5px',
	},
});

export interface PokemonsListProps {
	state: State | null;
	showDetails: (p: PokemonDetails) => void;
}

const PokemonsList: React.FC<PokemonsListProps> = ({ state, showDetails }) => {
	const classes = useStyles();
	return (
		<div>
			{state && (
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
			)}
		</div>
	);
};

export default PokemonsList;
