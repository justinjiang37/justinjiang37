import React from 'react';
import { makeStyles } from '@material-ui/core';
import ContentText from './ContentText';
import Box from '@material-ui/core/Box';
import dog from 'C:/Users/Justi/OneDrive/Desktop/Git/justinjiang37/src/assets/images/dog.jpg'

const useStyles = makeStyles(theme => ({
    background: {
        width: 2289,
        backgroundColor : 'pink',
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
    image : {
        marginTop : 50,
        marginLeft : 100,
        marginRight: 100,
        height: 200,
        width : 350
    }
}))

export default function Content() {
    const classes = useStyles();
    return (
        <div className = {classes.background}>
            <Box className = {classes.contentBox}>
                <ContentText title="Projects" text="Here are all the projects I've developed over my programming career!"></ContentText>
                <img className={classes.image} src={dog} alt="dog"></img>
            </Box>
            <Box className={classes.contentBox}>
                <img className={classes.image} src={dog} alt="dog"></img>
                <ContentText title="Goals" text="I've set some goals for my future, click here to see a detailed description of what I am working towards!"></ContentText>
            </Box>
            <Box className={classes.contentBox}>
                <ContentText></ContentText>
                dgu
                {/* Image */}
            </Box>
            <Box className={classes.contentBox}>
                <ContentText></ContentText>
                dgu
                {/* Image */}
            </Box>
        </div>
    )
}