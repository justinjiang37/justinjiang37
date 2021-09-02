import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Background from '../../assets/images/dog.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    button: {
        color : 'white',
        width: "200px",
        height: "49px",
        backgroundImage: `url(${Background})`
    }
}));


// have two links in the function parameter
// one is the path for the image for the background
// one is for the page that the button navigates to
// have one more parameter for the name of the button ie: sports/hobbies
export default function NavButton(props: any) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button className={classes.button}>
                {props.name}
            </Button>
        </div>
    );
}