import React, { Component } from 'react'
import PropTypes from 'prop-types'
const component=(props)=>{
    
return  (
    <div>
         
<h1>My name is {props.name}</h1> 
<button onClick={props.func}>What's my name</button>
<h3>I’m a {props.job} </h3>
<p> {props.bio}: Hi I'm {props.name} and I'm a {props.job}.  </p>
<Photo/> <br/>

<footer style={{ color :"black",
                 fontSize:"14px" , 
                 textAlign:"center" , 
                 fontWeight :"bold",
                 fontFamily :"sans serif"}}> All rights Reserved 2021 (C). call me: {props.number} </footer> 
</div>
)
}

const Photo = props => {
    return  <img src='https://www.mo.agency/hubfs/So%20you%20want%20to%20be%20a%20web%20developer.png' id="output" alt="profile" 
    style={{ height: "400px" , width : "400px",}}>{props.children}
            </img>
   }
  
   Component.propTypes = {
    fullName : PropTypes.string,
    bio : PropTypes.string,
    profession : PropTypes.string,
    age : PropTypes.number,

};
Component.defaultProps = {
    fullName: "user ",
    profession : "job",
    age:"age"
    
   };
   
export default component