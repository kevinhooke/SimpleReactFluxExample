import React, { Component } from 'react';
import AppDispatcher from '../dispatcher/Dispatcher';

class ButtonComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            label : this.props.label
        };
    }


    handleOnclick() {
        console.log("ButtonComponent is creating Action for Dispatcher...");

        AppDispatcher.dispatch({
            actionName: 'BUTTON_CLICK',
            newItem: { value: 'example value' }
        });

    }

    render() {
        return (
            <div className="button">
                <button onClick={this.handleOnclick}>{this.state.label}</button>
            </div>
        );
    }
}

export default ButtonComponent;
