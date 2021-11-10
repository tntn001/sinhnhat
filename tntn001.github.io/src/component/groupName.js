import React from "react";
import RoundImage from "react-rounded-image";
import MyAvatar from "../image/avatar.png";
import "../index.css";
import cake from "../image/cake-2.gif"

import { colorName, colorLightBlue } from "../colorDefine";

import strs from "../stringDefine"


function AboutMe() {
    return (<p style={aboutMeStyle}
        dangerouslySetInnerHTML={{ __html: strs.about_me }} />);
}


function groupInfo() {
    return (
        <div style={containerStyle}>
            <div style={{
                zIndex: -1,
                position: "absolute",
                left: 0,
                right: 0,
                height: 100,
                minWidth: 600,
                display: "flex",
                background: colorLightBlue,

            }} />
            <div style={{
                zIndex: -1,
                position: "absolute",
                left: 100,
                display: "flex",
                background: colorLightBlue,

            }}>
                <img height={100} src={cake} />
            </div>
            {avatar()}
            {AboutMe()}
            {nameTitle()}
        </div>
    );
}

function avatar() {
    return (<div style={avatarStyle}>
        <RoundImage
            imageWidth={150}
            imageHeight={150}
            image={MyAvatar}
            roundedSize={5}
            roundedColor="#ffffff" />
    </div>);
}
function nameTitle() {
    return (<div style={nameStyle}>
        <h3 style={textNameStyle}>{strs.my_name}</h3>
        <h3 style={textPositionStyle}>{strs.my_job}</h3>
    </div>);
}


const aboutMeStyle = {
    fontSize: 12,
    marginTop: 100,
    marginLeft: 170,
    maxWidth: 600,
    minWidth: 400,
    position: "absolute",
    textAlign: "justify",
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    color: "#000"
}


const panelStyle = {
    position: "absolute",
    left: 0,
    right: 0,
    height: 200,
    zIndex: -1,
};



const containerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

};

const nameStyle = {
    paddingTop: 10,
    paddingRight: 20,
    height: 100,

};


const avatarStyle = {
    marginTop: 15,
    marginLeft: 15
};


const textNameStyle = {
    color: colorName,
    fontFamily: "font1",
    whiteSpace: "nowrap"
}
const textPositionStyle = {
    color: colorName,
    fontFamily: "font1",
    whiteSpace: "nowrap"
}


export default () => {
    return (<div>
        <div style={panelStyle} />
        {groupInfo()}
    </div>);
}

