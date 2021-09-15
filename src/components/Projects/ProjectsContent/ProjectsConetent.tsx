import React from 'react';
import { makeStyles } from '@material-ui/core';
import ProjectsBlock from './ProjectBlock/ProjectBlock';

const useStyles = makeStyles(theme => ({
}))

export default function ProjectsConetent() {
    const classes = useStyles();
    return (
        <div>
            <ProjectsBlock></ProjectsBlock>
            <ProjectsBlock></ProjectsBlock>
            <ProjectsBlock></ProjectsBlock>
        </div>
    )
}