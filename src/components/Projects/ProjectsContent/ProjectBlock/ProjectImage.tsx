import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    image: {
        position: "absolute",
        right: 300,
        top: 600
    },
    button : {
        position: "absolute",
        top: 280,
        right: 335
    }
}))

export default function ProjectImage(props: any) {
    const classes = useStyles();
    return (
        <div className={classes.image}>
            <img src={props.source} alt="askd" width="800" height="600"></img>
            <div className={classes.button}>see more</div>
        </div>
    )
}