import React from "react";
import { contentStyle1, contentArrow1, Task, iconStyle1, contentStyleJoy, iconStyleJoy } from "./timelineStyle"

import { VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import captainStrike from "../image/captain_strike.png";

import { Regency, Company } from "./timelineStyle";

import strs from "../stringDefine";

import YouTube from "react-youtube";
import ImageViewer from "./ImageViewer";



export default class JoyWorkOTwo extends React.Component {

    render() {
        return (<VerticalTimelineElement
            contentStyle={contentStyleJoy}
            contentArrowStyle={contentArrow1}
            iconStyle={iconStyleJoy}            
            date={strs.joy_2_date} >
            <Regency content={strs.joy_2_regency} />
            <Company content={strs.joy_com} />
            <Task content={strs.joy_2_task} />
            <div style={{
                display: "flex",
                flexDirection: "row",
            }}>
                <ImageViewer list={[captainStrike]} width={150} />
                <YouTube videoId="uX_B-74GwIE"
                    opts={{ width: "200", height: "150" }} />
            </div>

        </VerticalTimelineElement>);
    }
}