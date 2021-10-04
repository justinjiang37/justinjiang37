import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    image: {
        position: "relative",
        top: -20
    },
    button : {
        position: "relative",
        top: -330,
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