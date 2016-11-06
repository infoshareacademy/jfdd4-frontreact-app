import React, {Component} from 'react';
import { FABButton, Icon, IconButton } from 'react-mdl';

export default class ButtonAddToFavorite extends Component {
    render() {
        return (
            <IconButton onClick={this.props.onClick} name="favorite" style={{ color: this.props.shouldBeRed ? '#ff4081' : '#484848'}}/>
        )
    }
};
