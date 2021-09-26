import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({

    ProjectContentTitle: {
        fontSize: 45,
        fontWeight: 800,
        fontFamily: ""
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