import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Form,Button,ButtonGroup,Dropdown,DropdownButton} from 'react-bootstrap'

function Main(props){
    
    return(
        <div>
            <h1>Welcome {props.email} to Main Page</h1>
        </div>
    );
}
export default Main;