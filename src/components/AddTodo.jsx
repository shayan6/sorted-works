import React, { Component } from 'react';

class AddTodo extends Component {
    state = { title : '' }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo( this.state.title );
        this.setState({ title : '' });
    }
    onChange = (e) => {
        this.setState({ title : e.target.value });
    }
    render() { 
        return ( 
            <div style={{backgroundImage: 'linear-gradient(to right, #ffffff, #dad9d9)',
                        height: '95px',
                        padding: '2%',
                        borderRadius:'6px'}}>
                <form onSubmit={this.onSubmit} > 
                    <input type="text" name="title" required placeholder="Add Todo ...." value={this.state.title} style={{width:'100%'}} onChange={this.onChange} />
                    <br/>
                    <input type="submit" name="submit" className="btn btn-sm btn-primary mt-2" style={{float:'right'}}/>
                </form>
            </div>
         );
    }
}
 
export default AddTodo;