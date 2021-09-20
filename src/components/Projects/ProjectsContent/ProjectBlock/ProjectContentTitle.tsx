import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    ProjectContentTitle: {
        fontSize: 50,
    }

}))

export default function ProjectContentTitle(props: any) {
    const classes = useStyles();
    return (
        <div className={classes.ProjectContentTitle}>
            {props.title}
        </div>
    )
}