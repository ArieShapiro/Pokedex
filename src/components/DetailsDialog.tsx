import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	dialog: {
        padding: '30px',
        textTransform:'capitalize',
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

export interface DetailsDialogProps {
	dialogData: PokemonDetails | undefined;
	dialog: boolean;
	setDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

const DetailsDialog: React.FC<DetailsDialogProps> = ({ dialogData, dialog, setDialog }) => {
	const classes = useStyles();
	return (
		<Dialog
			onClose={() => {
				setDialog(false);
			}}
			aria-labelledby="simple-dialog-title"
			open={dialog}
		>
			{dialogData && (
				<div className={classes.dialog}>
					<Avatar src={dialogData.picture} className={classes.dialogAvatar} />
					<Typography variant="h6">Name</Typography>
					<Typography >{dialogData.name}</Typography>
					<Typography variant="h6">Order Number</Typography>
					<Typography>{dialogData.orderNumber}</Typography>
					<Typography variant="h6">Abilities</Typography>

					<div>
						{dialogData.abilities.map((a, idx) => (
							<Typography component="span" key={a}>
								{`${a}${idx !== dialogData.abilities.length - 1 ? ' | ' : ''}`}{' '}
							</Typography>
						))}
					</div>

					<Typography variant="h6">Types</Typography>

					<div>
						{dialogData.types.map((t, idx) => (
							<Typography component="span" key={t}>
								{`${t}${idx !== dialogData.types.length - 1 ? ' | ' : ''}`}{' '}
							</Typography>
						))}
					</div>
					<Typography variant="h6">Stats</Typography>
					<div>
						{dialogData.stats.map((s, idx) => (
							<Typography component="span" key={s}>
								{`${s}${idx !== dialogData.stats.length - 1 ? ' | ' : ''}`}{' '}
							</Typography>
						))}
					</div>

					<Typography variant="h6">Possible Evolutions</Typography>
					<div>
						{dialogData.possibleEvolutions.map((e, idx) => (
							<Typography component="span" key={e}>
								{`${e}${idx !== dialogData.possibleEvolutions.length - 1 ? ' | ' : ''}`}{' '}
							</Typography>
						))}
					</div>

					<Typography variant="h6">Moves</Typography>
					<div>
						{dialogData.moves.map((m, idx) => (
							<Typography component="span" key={m}>
								{`${m}${idx !== dialogData.moves.length - 1 ? ' | ' : ''}`}{' '}
							</Typography>
						))}
					</div>
				</div>
			)}
		</Dialog>
	);
};

export default DetailsDialog;
