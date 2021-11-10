import React from "react";
import { contentStyle1, contentArrow1, Task, iconStyle1, contentStyleJoy, iconStyleJoy } from "./timelineStyle"

import { VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import trollImg from "../image/troll_running.png";

import { Regency, Company } from "./timelineStyle";

import strs from "../stringDefine";

import YouTube from "react-youtube";
import ImageViewer from "./ImageViewer";



export default class JoyWorkOne extends React.Component {

    render() {
        return (<VerticalTimelineElement
            contentStyle={contentStyleJoy}
            contentArrowStyle={contentArrow1}
            iconStyle={iconStyleJoy}            
            date={strs.joy_1_date} >
            <Regency content={strs.joy_1_regency} />
            <Company content={strs.joy_com} />
            <Task content={strs.joy_1_task_1} />
            <Task content={strs.joy_1_task_2} />
            <div style={{
                display: "flex",
                flexDirection: "row",
            }}>
                <ImageViewer list={[trollImg]} width={150} />
                <YouTube videoId="iCSe3uM_MdY"
                    opts={{ width: "200", height: "150" }} />
            </div>

        </VerticalTimelineElement>);
    }
}