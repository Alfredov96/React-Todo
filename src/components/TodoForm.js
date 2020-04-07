import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            itemName: ""
        };
    }
    handleChanges = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }
    submitItem = e => {
        e.preventDefault();
        this.setState({ item: '' });
        this.props.addItem(e, this.state.item);
    };

    render() {
        console.log('rendering form');
        return (
        <form onSubmit={this.submitItem}>
            <input
            type="text"
            value={this.state.item}
            name="item"
            onChange={this.handleChanges}>    
            </input>
        </form>
        );
    }
}

export default TodoForm;