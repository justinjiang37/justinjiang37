import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    ProjectsText: {
        width: 700,
        height: 600,
        position: "relative",
        top: 100
    },
    title: {
        fontSize: 45,
        fontWeight: 800,
        fontFamily: "",
    },
    text: {
        fontSize: 23,
        fontWeight: 600,
        fontFamily: "Helvetica",
    }

}))

export default function ProjectsText(props: any) {
    const classes = useStyles();
    return (
        <div className={classes.ProjectsText}>
            <div className={classes.title}>{props.title}</div>
            <div className={classes.text}>{props.text}</div>
        </div>
    )
}