import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { setTimeout } from "timers";

export default class ProgressBarAnimated extends React.Component {

    constructor(props) {
        super(props);
        this.state = { updateValueNow: 0, variant: "danger" }
    }

    componentDidMount() {
        setTimeout(function () {
            var nextVariant = "danger";
            if (this.props.now < 65) {
                nextVariant = "danger";
            } else if (this.props.now < 75) {
                nextVariant = "warning"
            } else if (this.props.now < 85) {
                nextVariant = "info"
            } else {
                nextVariant = "success"
            }
            this.setState({ updateValueNow: this.props.now, variant: nextVariant })

        }.bind(this), 1000)
    }

    render() {
        return (
            <ProgressBar now={this.state.updateValueNow} variant={this.state.variant} />
        );
    }

}