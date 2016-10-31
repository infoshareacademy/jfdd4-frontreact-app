import React, {Component} from 'react';
import { FABButton, Icon } from 'react-mdl';
import '../Products.css';

const style = {
    marginRight: 20,
};

export default class ButtonAddToList extends Component {
    render() {
        return (
            <FABButton mini colored ripple ClassName="mdl-button--floating-action">
                <Icon name="add"/>
            </FABButton>
        )
    }
};
