import React from 'react'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    title: {
        textAlign : "left",
        marginTop: 50,
        marginBottom:20,
        fontFamily: "Apple Color Emoji",
        fontSize: 35,
    },
    text: {
        fontSize: 20
    }
}))

export default function ContentText(props: any) {
    const classes = useStyles();
    return (

        <div>
            <div className = {classes.title}>
                {props.title}
            </div>
            <div className={classes.text}>
                {props.text}
            </div>
        </div>
    )
}
