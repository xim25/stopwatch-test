import React, { Component } from 'react';

class Stopwatch extends Component {
    constructor() {
        super();
        this.state = {
            status: false,
            currentTime: 0,
            laps: [],
            lastLap: null
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

        if(minutes.length < 2){
            minutes = '0' + minutes;
          }
      if(seconds.length < 2){
            seconds = '0' + seconds;
          }
      
      return minutes + ' : ' + seconds + ' : ' + milliseconds
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
                <div>
                    <h1>{this.formattedTime()}</h1>

                    {(this.state.status == false
          ? <button onClick={this.handleStart}>Start</button>
          : <button onClick={this.handleStop}>Stop</button>
        )}

                    {(this.state.status == false
          ? <button onClick={this.handleReset}>Reset</button>
          : <button onClick={this.handleLap}>Lap</button>
        )}
                </div>
                <div>
                    <ul>
                        {this.state.laps.map((lap, i) => 
                            <li><b>LAP {i + 1}</b>—{lap}</li>    )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Stopwatch;
