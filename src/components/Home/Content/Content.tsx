import React from 'react';
import { makeStyles } from '@material-ui/core';
import ContentText from './ContentText';
import Box from '@material-ui/core/Box';
import dog from 'C:/Users/Justi/OneDrive/Desktop/Git/justinjiang37/src/assets/images/dog.jpg'

const useStyles = makeStyles(theme => ({
    background: {
        // position: "absolute",
        // top: 0, right: 0, bottom: 0, left: 0,
        width:2289,
        background: 'linear-gradient(to right bottom, #3e7be6, #6c3fe8)',
        marginTop : 400
    },
    contentBox : {
        marginTop: 50,
        margin : 50,
        display : "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    image1 : {
        marginTop : 50,
        marginLeft : 100,
        marginRight: 100,
        height: 200,
        width : 350
    },
    image2: {
        marginTop: 50,
        marginLeft: 100,
        marginRight: 100,
        height: 200,
        width: 350
    }

}))

export default function Content() {
    const classes = useStyles();
    return (
        <div className = {classes.background}>
            <Box className = {classes.contentBox}>
                <ContentText title="Projects" text="Here are all the projects I've developed over my programming career!" side="left"></ContentText>
                <img className={classes.image1} src={dog} alt="dog"></img>
            </Box>
            <Box className={classes.contentBox}>
                <img className={classes.image2} src={dog} alt="dog"></img>
                <ContentText title="Goals" text="I've set some goals for my future, click here to see a detailed description of what I am working towards!" side="right"></ContentText>
            </Box>
            <Box className={classes.contentBox}>
                <ContentText title="Achievements" text="I've experienced many things, here are what I've done! this is temp btw im obviously not going yo use this" side="left"></ContentText>
                <img className={classes.image1} src={dog} alt="dog"></img>
            </Box>
            <Box className={classes.contentBox}>
                <img className={classes.image2} src={dog} alt="dog"></img>
                <ContentText title="About Me" text="Click here to learn more about me, where I'm from, my family and more!" side="right"></ContentText>
            </Box>
        </div>
    )
}