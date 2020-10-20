import React, { Component } from "react";

class HistorySample extends Component {
    hadleGoBack = () => {
        this.props.history.goBack();
    };

    hadleGoHome = () => {
        this.props.history.push("/");
    };

    componentDidMount() {
        this.unblock = this.props.history.block("가시나요?");
    }

    componentWillUnmount() {
        if (this.unblock) {
            this.unblock();
        }
    }

    render() {
        return (
            <>
                <button onClick={this.hadleGoBack}>뒤로</button>
                <button onClick={this.hadleGoHome}>홈으로</button>
            </>
        );
    }
}

export default HistorySample;
