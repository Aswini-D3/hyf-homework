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
                    return (   <div>
                               You have used {this.state.count} seconds on this website.
                               </div>
                              
                            );
          }
}

export default Timer;

