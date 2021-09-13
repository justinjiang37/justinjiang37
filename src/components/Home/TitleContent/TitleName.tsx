import React from 'react';
import { Spring } from 'react-spring';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    title: {
        color: 'white',
        marginBottom: 200,
        marginTop: 400,
        fontSize: 175,
        fontFamily: "Roboto"
    },
    subtitle: {
        color: 'white',
        fontSize: 25,
        fontWeight: 200,
        fontFamily: "Raleway"
    }
}))

export default function TitleName(props: any) {

    const classes = useStyles();

    return (
        <div>
            <div>
                <h1 className={classes.title}>Justin Jiang</h1>
            </div>
            <div>
                <h2 className={classes.subtitle}>Scroll down to learn more about me</h2>
            </div>
        </div>
    )
}
