import React, { Component } from "react";
class Border extends Component {
    render(){
        return(
        <div style={ { border: "2px solid palevioletred", height:550 } }>
            {this.props.children}
        </div>
        )
    }
 }
 export default Border;