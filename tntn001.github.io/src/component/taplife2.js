import React from "react";
import { contentStyle1, contentArrow1, Task, iconStyle1, contentStyleTaplife, iconStyleTaplife } from "./timelineStyle"

import { VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';



import { Regency, Company } from "./timelineStyle";

import strs from "../stringDefine";

import ImageViewer from "./ImageViewer";
import letParty1 from "../image/let_party_1.png"
import letParty2 from "../image/let_party_2.png"
import letParty3 from "../image/let_party_3.png"



export default class TapLifeTwo extends React.Component {

    render() {
        return (<VerticalTimelineElement
            contentStyle={contentStyleTaplife}
            contentArrowStyle={contentArrow1}
            iconStyle={iconStyleTaplife}            
            date={strs.taplife_date_2} >
            <Regency content={strs.taplife_regency_2} />
            <Company content={strs.taplife_com} />
            <Task content={strs.taplife_task_2_1} />
            <Task content={strs.taplife_task_2_2} />
            <Task content={strs.taplife_task_2_3} />
            <div style={{
                display: "flex",
                flexDirection: "column",
            }}>
                <ImageViewer list={[letParty1, letParty2, letParty3]} width={100} />

            </div>

        </VerticalTimelineElement>);
    }
}