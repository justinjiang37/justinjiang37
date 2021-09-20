import React from 'react';
import { makeStyles } from '@material-ui/core';
import ProjectsBlock from './ProjectBlock/ProjectBlock';

const useStyles = makeStyles(theme => ({
    content: {
        marginTop: 200,
        marginBottom: 200,
    },
    block1: {
        height: 1000,
        width: 2289,
        background: 'linear-gradient(to right bottom, #9464AA, #AE8589)',
    },
    block2: {
        height: 1000,
        width: 2289,
        background: 'linear-gradient(to right bottom, #75C4D7, #8684BD)',
    },
    block3: {
        height: 1000,
        width: 2289,
        background: 'linear-gradient(to right bottom, #C16868, #7A7373)',
    },
}))

export default function ProjectsContent() {
    const classes = useStyles();
    return (
        <div className={classes.content}>
            <div className={classes.block1}>
                <ProjectsBlock title={"Alissa"} text={"This is an AI I've been working on."}></ProjectsBlock>
            </div>
            <div className={classes.block2}>
                <ProjectsBlock></ProjectsBlock>
            </div>
            <div className={classes.block3}>
                <ProjectsBlock></ProjectsBlock>
            </div>

        </div>
    )
}