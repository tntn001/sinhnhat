import React from "react";

import CenterTop from "./centerTopLayout";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';

import JoyWorkOne from "./joy1"
import JoyWorkTwo from "./joy2"
import Army from "./army"
import Candybots from "./candybots"
import Onetech from "./onetech"
import TapLifeOne from "./taplife1"
import TapLifeTwo from "./taplife2"
import TapLifeThree from "./taplife3"
import strs from "../stringDefine"
import { colorNormalText, colorTextInBlack, colorBGTitle } from "../colorDefine"




const containerStyle = {
    flex: 1,
    marginLeft: 5,
    minWidth: 480,
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "column"
}

const centerStyle = {

}


function TitleExperience() {
    return (
        <p style={titleStyle}>{strs.experience_title}</p>
    )
}

const titleStyle = {
    fontFamily: "font1",
    fontSize: 22,
    padding: 5,
    color: colorTextInBlack,
    marginTop: 40,
    background: colorBGTitle,
    marginRight: 20,
    marginLeft: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 25,
    textAlign: "center"
}


function Center() {
    return (<div style={centerStyle}>
        {TitleExperience()}
        <VerticalTimeline layout="2-columns">
            <JoyWorkOne />
            <Army />
            <JoyWorkTwo />
            <Candybots />
            <Onetech />
            <TapLifeOne />
            <TapLifeTwo />
            <TapLifeThree />
        </VerticalTimeline>
    </div>);

}




export default () => {
    return (
        <div style={containerStyle}>
            {CenterTop()}
            {Center()}
        </div>
    );
}



