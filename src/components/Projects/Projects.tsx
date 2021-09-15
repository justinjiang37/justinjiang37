import React from 'react';
import { makeStyles } from '@material-ui/core';
import Footer from '../Footer/Footer';
import ProjectsConetent from './ProjectsContent/ProjectsConetent';
import Heading from '../Heading/Heading';

const useStyles = makeStyles(theme => ({
}))

export default function Projects() {
    const classes = useStyles();
    return (
        <div>
            <Heading></Heading>
            <ProjectsConetent></ProjectsConetent>
            <Footer></Footer>
        </div>
    )
}