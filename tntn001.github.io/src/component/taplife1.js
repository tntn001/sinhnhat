import React from "react";
import { contentStyle1, contentArrow1, Task, iconStyle1, contentStyleTaplife, iconStyleTaplife } from "./timelineStyle"

import { VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';

import onetechPng from "../image/onetech.png";

import taplifePng1 from "../image/taplife_1.png"
import taplifePng2 from "../image/taplife_2.png"


import { Regency, Company } from "./timelineStyle";

import strs from "../stringDefine";

import YouTube from "react-youtube";
import ImageViewer from "./ImageViewer";



export default class TapLifeOne extends React.Component {

    render() {
        return (<VerticalTimelineElement
            contentStyle={contentStyleTaplife}
            contentArrowStyle={contentArrow1}
            iconStyle={iconStyleTaplife}            
            date={strs.taplife_date_1} >
            <Regency content={strs.taplife_regency_1} />
            <Company content={strs.taplife_com} />
            <Task content={strs.taplife_task_1_1} />
            <Task content={strs.taplife_task_1_2} />
            <div style={{
                display: "flex",
                flexDirection: "column",
            }}>
                <ImageViewer list={[taplifePng1, taplifePng2]} width={150} />
                <YouTube videoId="nyGADjMKtKA"
                    opts={{ width: "200", height: "150" }} />


            </div>

        </VerticalTimelineElement>);
    }
}