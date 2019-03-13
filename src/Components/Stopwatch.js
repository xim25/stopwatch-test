import React, { Component } from 'react';

class Stopwatch extends Component {
    constructor() {
        super();
        this.state = {
            status: false,
            currentTime: 0,
            laps: []
        }
        this.intervalId = null;
    }

    handleStart = () => {
        let {currentTime} = this.state;
        let _this = this;
        this.intervalId = setInterval(() => {
            _this.setState({
                currentTime: (currentTime += 1)
            });
        }, 10);
    }

    handleStop = () => {
        let _this = this;
        clearInterval(_this.intervalId)
    }

    handleLap = () => {
        alert("finish lap...")
    }

    handleReset = () => {
        let _this = this;
        clearInterval(_this.intervalId);
        this.setState({
            currentTime: 0
        })
    }

    getMilliseconds() {
        return this.state.currentTime % 100;
    }

    getSeconds() {
        return Math.floor(this.state.currentTime / 100 % 60);
    }

    getMinutes() {
        return Math.floor(this.state.currentTime/6000);
    }

    render(){
        return(
            <div>
                <h1>{this.getMinutes()}:{this.getSeconds()}:{this.getMilliseconds()}</h1>
                <button onClick={this.handleStart}>Start</button>
                <button onClick={this.handleStop}>Stop</button>
                <button onClick={this.handleLap}>Lap</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

export default Stopwatch;
