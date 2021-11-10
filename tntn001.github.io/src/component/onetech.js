import React from "react";
import { contentStyle1, contentArrow1, Task, iconStyle1, contentStyleOnetech, iconStyleOnetech } from "./timelineStyle"

import { VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import onetechPng from "../image/onetech.png";
import onetechPng2 from "../image/onetech_2.png";


import { Regency, Company } from "./timelineStyle";

import strs from "../stringDefine";
import ImageViewer from "./ImageViewer";



export default class Onetech extends React.Component {

    render() {
        return (<VerticalTimelineElement
            contentStyle={contentStyleOnetech}
            contentArrowStyle={contentArrow1}
            iconStyle={iconStyleOnetech}            
            date={strs.onetech_date} >
            <Regency content={strs.onetech_regency} />
            <Company content={strs.onetech_com} />
            <Task content={strs.onetech_task_1} />
            <Task content={strs.onetech_task_2} />
            <div style={{
                display: "flex",
                flexDirection: "column",
            }}>
                <ImageViewer list={[onetechPng, onetechPng2]} width={150} />

            </div>

        </VerticalTimelineElement>);
    }
}