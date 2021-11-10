import React from "react";
import { contentStyle1, contentArrow1, Task, iconStyle2, contentStyleArmy, iconStyleArmy } from "./timelineStyle"

import { VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import army1 from "../image/army_1.png";
import army2 from "../image/army_2.png";
import bullet from "../image/bullet.png";

import { Regency, Company } from "./timelineStyle";

import strs from "../stringDefine";

import ImageViewer from "./ImageViewer";


export default class Army extends React.Component {

    render() {
        return (<VerticalTimelineElement
            contentStyle={contentStyleArmy}
            contentArrowStyle={contentArrow1}
            iconStyle={iconStyleArmy}            
            date={strs.joy_1_date} >
            <Regency content={strs.army_regency} />
            <Company content={strs.army_com} />
            <Task content={strs.army_task_1} />
            <Task content={strs.army_task_2} />
            <Task content={strs.army_task_3} />
            <Task content={strs.army_task_4} />
            <ImageViewer list={[army1, army2, bullet]} />


        </VerticalTimelineElement>);
    }
}