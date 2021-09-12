import React from 'react';
import { makeStyles } from '@material-ui/core';
import Item from './Item';

const useStyles = makeStyles(theme => ({
    box: {
        marginTop: 100,
        display:"flex",
        marginBottom : 50,
        flexDirection:"row",
        justifyContent : "center"
    }
}))

export default function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.box}>
            <Item name="Github"/>
            <Item name="Email" />
            <Item name="Instagram" />
            <Item name="Youtube" />
            <Item name="LinkedIn" />
            <Item name="Twitter" />
        </div>
    )
}