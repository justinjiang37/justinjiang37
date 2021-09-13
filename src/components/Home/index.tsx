import React from 'react';
import { Spring } from 'react-spring';
import Content from './Content/Content';
import TitleName from './TitleContent/TitleName';
import Footer  from './Footer/Footer';

export default function Home(props: any) {
    return (
        <div>
            <TitleName></TitleName>
            <Content></Content>
            <Footer></Footer>
        </div>
    )
}