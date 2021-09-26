import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    ProjectContentText: {
        fontSize: 23,
        fontWeight: 600,
        fontFamily: "Helvetica"
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