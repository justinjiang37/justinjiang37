import React from 'react'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    title1: {
        textAlign : "left",
        marginTop: 50,
        marginBottom:20,
        fontFamily: "Apple Color Emoji",
        fontSize: 35,
    },
    title2: {
        textAlign: "right",
        marginTop: 50,
        marginBottom: 20,
        fontFamily: "Apple Color Emoji",
        fontSize: 35,
    },
    text: {
        fontSize: 20,
        whiteSpace: "initial"
    }
}))

export default function ContentText(props: any) {
    const classes = useStyles();
    if (props.side == "left") {
        return (
            <div>
                <div className={classes.title1}>
                    {props.title}
                </div>
                <div className={classes.text}>
                    {props.text}
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div className={classes.title2}>
                    {props.title}
                </div>
                <div className={classes.text}>
                    {props.text}
                </div>
            </div>
        )
    }
}
