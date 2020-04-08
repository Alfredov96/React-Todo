import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newItem: ""
        };

    }    

    handleChanges = e => {
        e.preventDefault();
        this.setState({ newItem: e.target.value })
    }
    // submitItem = e => {
    //     console.log(props)
    //     e.preventDefault();
    //     this.props.addItem(e, this.state.newItem);
    //     this.setState({ newItem: '' });
        
    // };
    render() {
        console.log('rendering form');
        return (
        <form onSubmit={(e) => {
            e.preventDefault()
            this.props.addItem(this.state.newItem)
            this.setState({newItem: ""})
        }}>
            <input
            type="text"
            value={this.state.newItem}
            name="item"
            onChange={(e) => {
                this.setState({
                    newItem: e.target.value
                })
            }}>    
            </input>
            <button>press me</button>
        </form>
        );
    }
}

export default TodoForm;