import React from "react";
import { contentStyle1, contentArrow1, Task, iconStyle1, contentStyleCandybot, iconStyleCandybot } from "./timelineStyle"

import { VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import candybots1 from "../image/candybots_1.png";
import candybots2 from "../image/candybots_2.png";

import { Regency, Company } from "./timelineStyle";

import strs from "../stringDefine";


import ImageViewer from "./ImageViewer";



export default class Candybots extends React.Component {

    render() {
        return (<VerticalTimelineElement
            contentStyle={contentStyleCandybot}
            contentArrowStyle={contentArrow1}
            iconStyle={iconStyleCandybot}
            
            date={strs.candy_date} >
            <Regency content={strs.candy_regency} />
            <Company content={strs.candy_com} />
            <Task content={strs.candy_task_1} />
            <Task content={strs.candy_task_2} />
            <Task content={strs.candy_task_3} />
            <Task content={strs.candy_task_4} />
            <div style={{
                display: "flex",
                flexDirection: "column",
            }}>
                <ImageViewer list={[candybots1, candybots2]} width={150} />               
            </div>

        </VerticalTimelineElement>);
    }
}