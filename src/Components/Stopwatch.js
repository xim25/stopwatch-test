import React, { Component } from 'react';

class Stopwatch extends Component {
    constructor() {
        super();
        this.state = {
            secondsElapsed: 0,
            minutesElapsed: 0
        }
    }

    handleStart = () => {
        let {secondsElapsed} = this.state;
        let _this = this;
        this.stopwatch = setInterval(function () {
            _this.setState({
                secondsElapsed: (secondsElapsed += 1)
            });
        }, 1000);
    }
    
    handleStop = () => {
        let _this = this;
        clearInterval(_this.stopwatch)
    }

    handleLap = () => {
        alert("finish lap...")
    }

    handleRestart = () => {
        alert("restarting...")
    }

    getSeconds() {
        
        return ('0' + this.state.secondsElapsed % 60).slice(-2);
    }

    getMinutes() {
        return Math.floor(this.state.secondsElapsed / 60);
    }

    getHours() {
        return Math.floor(this.state.secondsElapsed / 60);
    }

    render(){
        return(
            <div>
                <h1>00:00:00:00</h1>
                <h1>{this.getMinutes()}:{this.getSeconds()}</h1>
                <button onClick={this.handleStart}>Start</button>
                <button onClick={this.handleStop}>Stop</button>
            </div>
        );
    }
}

export default Stopwatch;
