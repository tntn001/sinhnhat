import React from "react";
import "../index.css";

import IconBirthday from "../image/icon_birthday.png"
import IconEmail from "../image/icon_email.png"
import IconAddress from "../image/icon_address.png"
import IconPhone from "../image/icon_phone.png"
import IconSkype from "../image/icon_skype.png"
import IconTelegram from "../image/icon_telegram.png"
import IconPin from "../image/icon_pin.png";
import { colorNormalText, colorTextInBlack, colorBGTitle, colorPanel } from "../colorDefine"

import strs from "../stringDefine"


const infoStyle = {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    marginLeft: 10,
    color: colorNormalText
}

const containerStyle = {
    marginTop: 5,
    flexDirection: "column",
    maxWidth: 300,
    minWidth: 300,
    flex: 1,
}

const titleStyle = {
    fontFamily: "font1",
    fontSize: 22,
    padding: 5,
    background: colorBGTitle,
    borderRadius: "55px",
    marginLeft: 20,
    marginRight: 20,
    alignSelf: "center",
    color: colorTextInBlack,
    textAlign: "center",
    marginTop: 30,
    padding: 5,
}


function TitleInfo() {
    return (
        <p style={titleStyle}>{strs.info_title}</p>
    )
}

function InfoGroup() {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={IconPin} width={50}
                style={{ marginTop: 20, alignSelf: "center", zIndex: 1 }} />
            <div style={groupStyle}>
                {TitleInfo()}
                <a style={infoStyle}>
                    <img src={IconBirthday} width={20} height={20} style={{ marginRight: 5 }} />
                    {" :  "}
                    {strs.birthday}
                </a>
                <a style={infoStyle}>
                    <img style={{ marginRight: 5, marginTop: 3 }}
                        src={IconEmail} width={20} height={20} />
                    {" :  "}
                    {strs.email}
                </a>
                <a style={infoStyle}>
                    <img style={{ marginRight: 5, marginTop: 3 }}
                        src={IconPhone} width={20} height={20} />
                    {": "}
                    {strs.phone_number}
                </a>
                <a style={infoStyle}>
                    <img style={{ marginRight: 5, marginTop: 3 }}
                        src={IconSkype} width={20} height={20} />
                    {": "}
                    {strs.skype}
                </a>
                <a style={infoStyle}>
                    <img style={{ marginRight: 5, marginTop: 3 }}
                        src={IconTelegram} width={20} height={20} />
                    {": "}
                    {strs.telegram}
                </a>
                <a style={infoStyle}>
                    <img style={{ marginRight: 5, marginTop: 1 }}
                        src={IconAddress} width={22} height={20} />
                    {": "}
                    {strs.address}
                </a>
            </div>
        </div>)
}





function TitleCareerInfo() {
    return (
        <p style={titleStyle}>{strs.career_title}</p>
    )
}

function CareerObjectiveGroup() {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={IconPin} width={50}
                style={{ marginTop: 20, alignSelf: "center", zIndex: 1 }} />
            <div style={groupStyle}>

                {TitleCareerInfo()}
                <ul>
                    <li>{strs.career_obj_1}</li>
                    <li>{strs.career_obj_2}</li>
                    <li>{strs.career_obj_3}</li>
                </ul>
            </div>
        </div>)
}

function TitleHobbiesInfo() {
    return (
        <p style={titleStyle}>{strs.hobbies_title}</p>
    )
}

function HobbiesGroup() {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={IconPin} width={50}
                style={{ marginTop: 20, alignSelf: "center", zIndex: 1 }}
            />
            <div style={groupStyle}>
                {TitleHobbiesInfo()}
                <ul>
                    <li>{strs.hobbies_1}</li>
                    <li>{strs.hobbies_2}</li>
                    <li>{strs.hobbies_3}</li>
                    <li>{strs.hobbies_4}</li>
                </ul>
            </div>
        </div>)
}

const groupStyle = {
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: -20,
    marginLeft: 10,
    flexDirection: "column",
    maxWidth: 300,
    minWidth: 300,
    flex: 1,
    zIndex: 0,
    borderRadius: 5,
    background: colorPanel,
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
}






export default () => {
    return (
        <div style={containerStyle}>
            {InfoGroup()}
            {CareerObjectiveGroup()}
            {HobbiesGroup()}
        </div>
    );
}



