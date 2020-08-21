import React, { Component } from "react";



class Timer extends Component {
          constructor() {
                    super();
                    this.state = { count: 0 };
          }
        componentDidMount() {
                    this.timer = setInterval(() =>
                                        this.setState({
                                                  count: this.state.count + 1,
                                            }),1000);
          }
          componentWillUnmount() {
                    clearInterval(this.timer);
          }
          render() {
                    return (   <div className="timer-text">
                                
                               <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Decimal_Clock_face_by_Pierre_Daniel_Destigny_1798-1805.jpg"></img>00:00:{this.state.count} Seconds
                               </div>
                              
                            );
          }
}

export default Timer;

