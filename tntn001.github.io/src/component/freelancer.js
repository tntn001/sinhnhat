import React from "react";
import { contentStyle1, contentArrow1, Task, iconStyle1 } from "./timelineStyle"

import { VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from "@material-ui/icons/Work"
import tourdee1 from "../image/tourdee_1.png"
import tourdee2 from "../image/tourdee_2.png"
import tourdee3 from "../image/tourdee_3.png"


import { Regency, Company } from "./timelineStyle";

import strs from "../stringDefine";

import YouTube from "react-youtube";
import ImageViewer from "./ImageViewer";



export default class Freelancer extends React.Component {

    render() {
        return (<VerticalTimelineElement
            contentStyle={contentStyle1}
            contentArrowStyle={contentArrow1}
            iconStyle={iconStyle1}
            icon={<WorkIcon />}
            date={strs.taplife_date_3} >
            <Regency content={strs.taplife_regency_3} />
            <Company content={strs.taplife_com} />
            <Task content={strs.taplife_task_3} />
            <div style={{
                display: "flex",
                flexDirection: "column",
            }}>
                <ImageViewer
                    list={[tourdee1, tourdee2, tourdee3]}
                    width={100} />

            </div>

        </VerticalTimelineElement>);
    }
}