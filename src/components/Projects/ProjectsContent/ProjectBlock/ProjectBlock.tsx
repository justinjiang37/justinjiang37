import React from 'react';
import { makeStyles } from '@material-ui/core';
import ProjectContentTitle from './ProjectContentTitle';
import ProjectContentText from './ProjectContentText';

const useStyles = makeStyles(theme => ({
    ProjectsBlock: {
        display: "flex",
        position: "relative",
        top: 500
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
            <div>

            </div>
        </div>
    )
}