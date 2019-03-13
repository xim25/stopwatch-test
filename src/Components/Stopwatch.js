import React, { Component } from 'react';
import '../Stopwatch.css';

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
                currentTime: (currentTime += 1),
                status: true
            });
        }, 10);
    }

    handleStop = () => {
        let _this = this;
        clearInterval(_this.intervalId);
        _this.setState({lastLap: this.intervalId,
                        status: false
        });
    }

    handleLap = () => {
        this.setState({
            laps: this.state.laps.concat([this.formattedTime(this.state.currentTime)])
        })
    }

    handleReset = () => {
        let _this = this;
        clearInterval(_this.intervalId);
        this.setState({
            currentTime: 0,
            laps: []
        })
    }

    formattedTime() {
        let minutes = this.getMinutes().toString();
        let seconds = this.getSeconds().toString();
        let milliseconds = this.getMilliseconds().toString();
        let hours = this.getHour().toString();

        if(minutes.length < 2){
            minutes = '0' + minutes;
          }
        if(seconds.length < 2){
            seconds = '0' + seconds;
          }

        if(milliseconds.length < 2){
            milliseconds = '0' + milliseconds;
          }
          
        if(hours.length < 2){
            hours = '0' + hours;
          }  
      
      return hours + ' : ' + minutes + ' : ' + seconds + ' . ' + milliseconds
    }

    getMilliseconds() {
        return this.state.currentTime % 100;
    }

    getSeconds() {
        return Math.floor(this.state.currentTime / 100 % 60);
    }

    getMinutes() {
        return Math.floor(this.state.currentTime / 6000);
    }

    getHour() {
        return Math.floor(this.state.currentTime / 360000);
    }

    render(){
        return(
            <div className="wraper">
                <div className="timer">
                    <h1>Stopwatch</h1>
                    <p>{this.formattedTime()}</p>

                    {(this.state.status === false
          ? <button className="button start" onClick={this.handleStart}>START</button>
          : <button className="button stop" onClick={this.handleStop}>STOP</button>
        )}

                    {(this.state.status === false
          ? <button className="button reset" onClick={this.handleReset}>RESET</button>
          : <button className="button lap"onClick={this.handleLap}>LAP</button>
        )}
                </div>
                <div className="list">
                    <ul>
                        {this.state.laps.map((lap, i) => 
                            <li><b>LAP {i + 1}</b> — {lap}</li>)
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Stopwatch;