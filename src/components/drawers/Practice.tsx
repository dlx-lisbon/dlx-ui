import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    GridList,
    GridListTile,
    GridListTileBar,
    IconButton,
    Typography,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            width: 500,
        },
        title: {
            color: theme.palette.primary.light,
        },
        titleBar: {
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        },
        icon: {
            color: 'rgba(255, 255, 255, 0.54)',
        },
    })
);
export default function Practice(props: { close: () => void }) {
    const classes = useStyles();
    const externalChallenges = [
        {
            title: 'cryptozombies',
            image: 'https://cryptozombies.io/course/static/image/preview-zombie.png',
            url: 'https://cryptozombies.io',
        },
        {
            title: 'gitcoin quests',
            image: 'https://gitcoin.co/dynamic/kudos/134/gitcoin_minibot',
            url: 'https://gitcoin.co/quests',
        },
        {
            title: 'ethernaut',
            image: 'https://ethernaut.openzeppelin.com/imgs/openzeppelin-logo.svg',
            url: 'https://ethernaut.openzeppelin.com/',
        },
        {
            title: 'proto.school',
            image: 'https://pbs.twimg.com/profile_images/1080832640658362368/FsPfqA1g_400x400.jpg',
            url: 'https://proto.school/#/tutorials',
        },
    ];
    const challenges = [
        {
            title: '<Em construção> 🚧',
            image:
                'https://www.sdxcentral.com/wp-content/uploads/2019/03/Cisco-WiFi-Routers-Attacked-After-Code-Hack-Posted.jpg',
            description: '',
            url: '',
        },
    ];

    return (
        <Dialog
            open={true}
            onClose={props.close}
            scroll={'body'}
            fullWidth={true}
            maxWidth="lg"
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
            <DialogContent>
                <div className={classes.root}>
                    <GridList cellHeight={180} className={classes.gridList}>
                        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                            <Typography variant="h2" component="h2" gutterBottom>
                                Desafios
                            </Typography>
                        </GridListTile>
                        {challenges.map((challenge) => (
                            <GridListTile key={challenge.title}>
                                <img src={challenge.image} alt={challenge.title} />
                                <GridListTileBar
                                    title={challenge.title}
                                    actionIcon={
                                        <IconButton
                                            aria-label={`info about ${challenge.title}`}
                                            className={classes.icon}
                                            onClick={() => (window.location.href = challenge.url)}
                                        >
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                    <GridList cellHeight={180} className={classes.gridList}>
                        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                            <Typography variant="h2" component="h2" gutterBottom>
                                Outras plataformas
                            </Typography>
                        </GridListTile>
                        {externalChallenges.map((externalChallenge) => (
                            <GridListTile key={externalChallenge.title} style={{ textAlign: 'center' }}>
                                <img
                                    src={externalChallenge.image}
                                    alt={externalChallenge.title}
                                    style={{ height: '100%', width: 'auto' }}
                                />
                                <GridListTileBar
                                    title={externalChallenge.title}
                                    actionIcon={
                                        <IconButton
                                            aria-label={`info about ${externalChallenge.title}`}
                                            className={classes.icon}
                                            onClick={() => (window.location.href = externalChallenge.url)}
                                        >
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.close} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}
