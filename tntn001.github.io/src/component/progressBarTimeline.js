import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import ICTimeLineFull from "../image/icon_timeline_full.png";
import ICTimeLineEmpty from "../image/icon_timeline_empty.png";

export default class ProgressBarTimeline extends React.Component {

    constructor(props) {
        super(props);
        this.state = { icon: ICTimeLineFull }
        this.onImageClick = this.onImageClick.bind(this);
        this.listButton = [];
        var list = this.props.listTimeline || [];
        list.push(list[list.length - 1])

        for (var i = 0; i < list.length - 1; i++) {
            var month = list[i] % 12;
            month = month == 0 ? 12 : month;
            var year = this.props.beginYear + Math.floor((list[i] - 1) / 12);
            var time = month + "/" + year;


            this.listButton.push(
                <div style={{ flex: list[i + 1] - list[i], display: "flex", flexDirection: "column" }}>
                    < img key={i}
                        src={this.state.icon}
                        width={20}
                        height={20}
                        onClick={() => this.onImageClick(i)}                    >
                    </img >
                </div>)
        }
    }

    render() {
        return (
            <div style={containerStyle}>
                <div style={groupButtonStyle}>
                    {this.listButton}
                </div>
                <ProgressBar style={{ height: 5, marginLeft: 6, marginRight: 6 }} now={45} animated />
            </div>
        );
    }

    onImageClick(index) {
        console.log(" hello " + index)
    }

}

const groupButtonStyle = {
    position: "relative",
    display: "flex",
    top: 12
}

const containerStyle = {
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5
}