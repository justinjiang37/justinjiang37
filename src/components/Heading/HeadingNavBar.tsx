import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    bar : {
        display : "flex",
        flexDirection: "row",
        justifyContent:"center",
    },
    item: {
        margin: 20,
        fontSize: 30
    }
}))

export default function HeadingNavBar() {
    const classes = useStyles();
    return (
        <div className={classes.bar}>
            <div className={classes.item}>Projects</div>
            <div className={classes.item}>Goals</div>
            <div className={classes.item}>Achivements</div>
            <div className={classes.item}>About Me</div>
        </div>
    )
}