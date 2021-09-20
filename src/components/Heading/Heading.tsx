import React from 'react';
import { makeStyles } from '@material-ui/core';
import HeadingNavBar from './HeadingNavBar';

const useStyles = makeStyles(theme => ({
    name: {
        marginTop: 100,
        fontWeight: 700,
        fontSize: 40,
    }
}))

export default function Heading() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.name}>Justin Jiang</div>
            <HeadingNavBar></HeadingNavBar>
        </div>
    )
}