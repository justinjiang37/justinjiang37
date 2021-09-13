import React from 'react';
import { makeStyles } from '@material-ui/core';
import Item from './Item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faYoutube, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const useStyles = makeStyles(theme => ({
    footer: {
        marginTop: 100,
        display:"flex",
        marginBottom : 50,
        flexDirection:"row",
        justifyContent : "center"
    },
    item: {
        padding: 50,
        fontSize: 70,
        color: "white"
    }
}))

export default function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.footer}>

            <a href="https://github.com/justinjiang37" ><FontAwesomeIcon icon={faGithub} className={classes.item}></FontAwesomeIcon></a>
            <a href="https://www.instagram.com/justinjiang37/"><FontAwesomeIcon icon={faInstagram} className={classes.item}></FontAwesomeIcon></a>
            <a href="https://www.youtube.com/channel/UCNBCMFr6OMng0Ia9dK3Oe6g"><FontAwesomeIcon icon={faYoutube} className={classes.item}></FontAwesomeIcon></a>
            <a href="https://twitter.com/JustinJ59047756"><FontAwesomeIcon icon={faTwitter} className={classes.item}></FontAwesomeIcon></a>
            <a href="linkedin.com/in/justin-jiang-5bb582215"><FontAwesomeIcon icon={faLinkedin} className={classes.item}></FontAwesomeIcon></a>
        </div>
    )
}