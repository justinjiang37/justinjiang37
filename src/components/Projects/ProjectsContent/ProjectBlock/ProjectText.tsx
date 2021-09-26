import React from 'react';
import { makeStyles } from '@material-ui/core';
import ProjectContentTitle from './ProjectContentTitle';
import ProjectContentText from './ProjectContentText';

const useStyles = makeStyles(theme => ({
    ProjectsBlock: {
        alignContent:"center",
        position: "relative",
        top: 500,
        right: -600
    }
}))

export default function ProjectsBlock(props: any) {
    const classes = useStyles();
    return (
        <div className={classes.ProjectsBlock}>
            <div>
                <ProjectContentTitle title={props.title}></ProjectContentTitle>
                <ProjectContentText text={props.text}></ProjectContentText>
            </div>
        </div>
    )
}