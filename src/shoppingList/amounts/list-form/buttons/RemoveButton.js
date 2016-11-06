import React, {Component} from 'react';
import { FABButton, Icon } from 'react-mdl';
import '../ListForm.css';

export default class ButtonAddToList extends Component {
    render() {
        return (
            <FABButton mini ripple ClassName="mdl-button-navigation">
                <Icon name="chevron left"/>
            </FABButton>
        )
    }
};