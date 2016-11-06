import React, {Component} from 'react';
import { FABButton, Icon } from 'react-mdl';
import '../Product.css'
const style = {

};

export default class ButtonBack extends Component {
    render() {
        return (

            <FABButton mini colored className="button-back">
                <Icon name="keyboard_arrow_up"/>
            </FABButton>
        )
    }
};