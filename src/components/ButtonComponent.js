import React, { Component } from 'react';

class ButtonComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            label : this.props.label
        };
    }

    render() {
        return (
            <div className="button">
                <button>{this.state.label}</button>
            </div>
        );
    }
}

export default ButtonComponent;
