import React, {Component} from 'react';
import { FABButton, Icon } from 'react-mdl';
import '../../products/Products.css';

const style = {
    marginRight: 20,
};

export default class ButtonClose extends Component {
    render() {
        return (
            <FABButton mini colored ripple ClassName="mdl-button-action">
                <Icon name="add"/>
            </FABButton>
        )
    }
};

