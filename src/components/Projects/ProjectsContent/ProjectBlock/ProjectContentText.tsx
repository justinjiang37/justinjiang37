import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    ProjectContentText: {
    }

}))

export default function ProjectContentText(props: any) {
    const classes = useStyles();
    return (
        <div className={classes.ProjectContentText}>
            {props.text}
        </div>
    )
}