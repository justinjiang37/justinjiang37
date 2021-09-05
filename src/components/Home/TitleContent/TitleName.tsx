import React from 'react';
import { Spring } from 'react-spring';


export default function TitleName(props: any) {
    return (
        <div>
            <div style={mainText}>
                <h1>Justin Jiang</h1>
            </div>
            <div style={instruction}>
                <h2>Scroll down to learn more about me</h2>
            </div>
        </div>
    )
}

const mainText = {
    color: 'white',
    marginBottom: 200,
    fontSize: 175,
    fontFamily: "Roboto"
}

const instruction = {
    color: 'white',
    fontSize: 25
    // want to make text thinner
}