
import React from "react";
import "../index.css";
import { colorNormalText, colorBGTitle, colorTextInBlack } from "../colorDefine"

import ProgressBarAnimated from "./progressBarAnimated";
import strs from "../stringDefine"



const CSharpText = "C# - Unity";
const CSharpSkillValue = 87;

const CPlusPlusText = "C++ - Visual Studio";
const CPlusPlusSkillValue = 67;

const JavaText = "Java - Android Studio";
const JavaSkillValue = 74;

const KotlinText = "Kotlin - Android Studio";
const KotlinSkillValue = 79;

const JavaScriptText = "Java Script - React Native";
const JavaScriptSkillValue = 69;

const MongoDBText = "MongoDB";
const MongoDBSkillValue = 62;

const TeamWorkText = "Teamwork";
const TeamWorkSkillValue = 85;

const EnglishText = "English";
const EnglishSkillValue = 55;

const containerStyle = {
    alignSelf: "stretch",
    flex: 2,
    height: 200,
    minHeight: 200,
    display: "flex",
    flexDirection: "row"
}

const progressBarStyle = {


}
const groupStyle = {
    flex: 1,
    padding: 20
}

const elementStyle = {
    fontFamily: "font1",
    fontSize: 14,
    padding: 5,
    color: colorNormalText
}

const skillStyle = {
    fontFamily: "font1",
    fontSize: 22,
    padding: 5,
    background: colorBGTitle,
    borderRadius: "50%",
    color: colorTextInBlack,
    alignSelf: "center",
    padding: 20,
    marginTop: 40,
}

function groupLeft() {
    return (<div style={groupStyle}>
        {CSharpSkill()}
        {CPlusPlusSkill()}
        {JavaSkill()}
        {KotlinSkill()}
    </div>);
}

function groupRight() {
    return (<div style={groupStyle}>
        {JavaScriptSkill()}
        {MongoDBSkill()}
        {TeamWorkSkill()}
        {EnglishSkill()}
    </div>);
}

function CSharpSkill() {
    return (<div style={elementStyle}>
        {CSharpText}
        <ProgressBarAnimated style={progressBarStyle} now={CSharpSkillValue} animated />
    </div>)
}

function CPlusPlusSkill() {
    return (<div style={elementStyle}>
        {CPlusPlusText}
        <ProgressBarAnimated style={progressBarStyle} now={CPlusPlusSkillValue} animated />
    </div>)
}

function JavaSkill() {
    return (<div style={elementStyle}>
        {JavaText}
        <ProgressBarAnimated style={progressBarStyle} now={JavaSkillValue} animated />
    </div>)
}

function KotlinSkill() {
    return (<div style={elementStyle}>
        {KotlinText}
        <ProgressBarAnimated style={progressBarStyle} now={KotlinSkillValue} animated />
    </div>)
}

function JavaScriptSkill() {
    return (<div style={elementStyle}>
        {JavaScriptText}
        <ProgressBarAnimated style={progressBarStyle} now={JavaScriptSkillValue} animated />
    </div>)
}

function MongoDBSkill() {
    return (<div style={elementStyle}>
        {MongoDBText}
        <ProgressBarAnimated style={progressBarStyle} now={MongoDBSkillValue} animated />
    </div>)
}

function TeamWorkSkill() {
    return (<div style={elementStyle}>
        {TeamWorkText}
        <ProgressBarAnimated style={progressBarStyle} now={TeamWorkSkillValue} animated />
    </div>)
}

function EnglishSkill() {
    return (<div style={elementStyle}>
        {EnglishText}
        <ProgressBarAnimated style={progressBarStyle} now={EnglishSkillValue} animated />
    </div>)
}


function TitleSkill() {
    return (
        <p style={skillStyle}>{strs.skill_title}</p>
    )
}




export default () => {
    return (
        <div style={containerStyle}>
            {groupLeft()}
            {TitleSkill()}
            {groupRight()}
        </div>
    );
}



