import { color } from '@material-ui/system';
import React from 'react';
import { Spring } from 'react-spring';


export default function Home() {
    return (
        <Spring
            from = {{opacity:0}}
            to = {{opacity:1}}
        >
            {props => (
                <div style={props}>
                    <div style={mainText}>
                        <h1>Justin Jiang</h1>
                    </div>
                </div>
            )}
        </Spring>
    )
}

const mainText = {
    color: 'red'
}