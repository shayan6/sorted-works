import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() { 
        return ( 
            <header style={headerStyle}>
                <div  className="container headBord" >
                    <div className="row" >
                        <div className="col-sm-3">MasterList({this.props.len.masterlist.length})</div>
                        <div className="col-sm-3">Todo({this.props.len.todo.length})</div>
                        <div className="col-sm-3">InProgress({this.props.len.pending.length})</div>
                        <div className="col-sm-3">Done({this.props.len.completed.length})</div>
                    </div>
                </div>
            </header>
         );
    }
}
 
const headerStyle = {
    textAlign: 'center',
    backgroundColor: '#333',
    color: '#fff',
    padding: '1%',
    marginBottom:'5%'
}

const linkStyle = {
    color: "#fff",
    fontWeight: 'bolder'
}

export default Header;