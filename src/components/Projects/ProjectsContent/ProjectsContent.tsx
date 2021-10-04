import React from 'react';
import { makeStyles } from '@material-ui/core';
import ProjectText from './ProjectBlock/ProjectText';
import ProjectImage from './ProjectBlock/ProjectImage';
import alissa from 'C:/Users/Justi/OneDrive/Desktop/Git/justinjiang37/src/assets/images/alissa.png'
//redux
const useStyles = makeStyles(theme => ({
    // @media only screen and (min-width: 1024px) {

    // }
    content: {
        marginTop: 200,
        marginBottom: 200,
    },
    block1: {
        display:"flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 1000,
        minWidth: '100vw',
        maxWidth: '100vw',
        background: 'linear-gradient(to right bottom, #9464AA, #AE8589)'
    },
    block2: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 1000,
        minWidth: '100vw',
        maxWidth: '100vw',
        background: 'linear-gradient(to right bottom, #75C4D7, #8684BD)',
    },
    block3: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 1000,
        minWidth: '100vw',
        maxWidth: '100vw',
        background: 'linear-gradient(to right bottom, #C16868, #7A7373)',
    },
    block4: {
        fontSize: 60,
        fontWeight: 700,
    }
}))

export default function ProjectsContent() {
    const classes = useStyles();
    return (
        <div className={classes.content}>
            <div className={classes.block1}>
                <ProjectText title={"Alissa"} text={"This is an voice assistant I've been working on. It uses multiple APIs and collects user input by voice."}></ProjectText>
                <ProjectImage source={alissa}></ProjectImage>
            </div>
            <div className={classes.block2}>
                <ProjectText title={"Arnold"} text={"This is a game I've been working on."}></ProjectText>
                <ProjectImage source={alissa}></ProjectImage>
            </div>
            <div className={classes.block3}>
                <ProjectText title={"YouTube Parser"} text={"This is a project I've been working on."}></ProjectText>
                <ProjectImage source={alissa}></ProjectImage>
            </div>
            <div className={classes.block4}>
                More Projects WIP!
            </div>
        </div>
    )
}