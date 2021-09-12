import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    item : {
        marginLeft:40
    }
}))

export default function Item(props: any) {
    const classes = useStyles();
    return (
        <div className={classes.item}>
            {props.name}
        </div>
    )
}