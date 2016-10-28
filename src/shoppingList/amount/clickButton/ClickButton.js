/**
 * Created by kbro2 on 26.10.2016.
 */
import React from 'react';
import {Button} from 'react-bootstrap'

export default class clickButton extends React.Component {
    render() {
        return (
            <Button
                disabled={this.props.isDisabled}
                onClick={this.props.handleClick}>
                {this.props.children}
            </Button>
        );
    }
}