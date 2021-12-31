import React, { Component } from "react";

export default class TodoList extends Component {
    state = {
        list: [],
        newItem: null,
    };
    clearData(){
        this.setState({
            newItem: null
        })
        this.name.text=''
    }
    addItemToList=()=>{
        let list = this.state.list;
        list.push(this.state.newItem);
        this.setState({list});
        this.clearData()
    }
    render(){
        return(
            <div>
                <h1>
                    Todo List
                </h1>
                What needs to be done:
                <input
                    type="text"
                    onChange={(e)=>this.setState({ newItem:e.target.value })}
                    name="name"
                />
                <button onClick={this.addItemToList}>Add Task</button>
                <h3>
                    <br/>Todo Tasks
                </h3>
                {this.state.list.map((e, index) => {
                    return(
                        <div key={index}>
                            <text>{index+1}: {e}</text>
                        </div>
                    )
                })}
            </div>
        )
    }
}