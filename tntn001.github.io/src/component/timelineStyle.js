import React from "react"
import { colorPanel, colorLightBlue } from "../colorDefine";

export const contentStyleJoy = {
    background: colorPanel,
    padding: 20,
    color: '#000000',
    borderRadius: 15,
    borderTop: "solid #ffcc00 5px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
}

export const contentStyleCandybot = {
    background: colorPanel,
    padding: 20,
    color: '#000000',
    borderRadius: 15,
    borderTop: "solid #80ffff 5px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
}
export const contentStyleArmy = {
    background: colorPanel,
    padding: 20,
    color: '#000000',
    borderRadius: 15,
    borderTop: "solid #009933 5px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
}

export const contentStyleOnetech = {
    background: colorPanel,
    padding: 20,
    color: '#000000',
    borderRadius: 15,
    borderTop: "solid #3385ff 5px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
}

export const contentStyleTaplife = {
    background: colorPanel,
    padding: 20,
    color: '#000000',
    borderRadius: 15,
    borderTop: "solid #00994d 5px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
}

export const contentArrow1 = {
    borderRight: '20px solid  #f0f0f5'
}

export const iconStyleJoy = {
    background: "#ffcc00",
    color: "#fff"
}

export const iconStyleCandybot = {
    background: "#80ffff",
    color: "#ff66cc"
}

export const iconStyleOnetech = {
    background: "#3385ff",
    color: "#fff"
}

export const iconStyleTaplife = {
    background: "#00994d",
    color: "#ff1a1a"
}


export const iconStyleArmy = {
    background: "#009933",
    color: "#ff0000"
}


export class Regency extends React.Component {
    render() {
        return (<h4>{this.props.content}</h4>)
    }
}

export class Company extends React.Component {
    render() {
        return (<h5>{this.props.content}</h5>);
    }
}

export class Task extends React.Component {
    render() {
        return (<p style={{ marginBottom: 10 }}><li>{this.props.content}</li></p>);
    }
}