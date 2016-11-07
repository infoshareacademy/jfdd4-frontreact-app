import React from 'react'
import {Button, Row, Col} from 'react-bootstrap'
import './ListForm.css'
import ButtonAddToList from './buttons/ButtonAddToList'
import RemoveButton from './buttons/RemoveButton'
import AddButton from './buttons/AddButton'
class ListForm extends React.Component {
    constructor() {
        super();
        this.state = {
            numberOfClicks: 0
        };
        this._plusClick = this._plusClick.bind(this)
        this._minusClick = this._minusClick.bind(this)

    }

    _plusClick() {
        if (this.state.numberOfClicks <= this.props.quantity - 1) {
            this.setState({
                numberOfClicks: this.state.numberOfClicks + 1
            })
        }
        else {
            console.log('oops')
        }
    }

    _minusClick() {
        if (this.state.numberOfClicks >= 1) {
            this.setState({
                numberOfClicks: this.state.numberOfClicks - 1
            })
        }
        else {
            console.log('oops')
        }
    }

    render() {
        return (
                <div>
                <div id="shop">
                   Sklep {this.props.shopName}  posiada {this.props.quantity - this.state.numberOfClicks} produktów
                </div>
                    <div className="cart" id="add-btn">
                    <Button onClick={() => this.props.addToList( this.props.itemID,  this.state.numberOfClicks, this.props.price, this.props.productName, this.props.shopName)}>
                        Dodaj do listy
                    </Button>
                </div>
                    <div className="cart" id="minus-btn">
                    <button
                        onClick={this._minusClick}>
                        Minus
                    </button>
                </div>
                <div className="cart" id="state">
                    {this.state.numberOfClicks}
                </div>
                <div className="cart" id="plus-btn">
                <button
                    onClick={this._plusClick}>
                    Plus
                </button>
                </div >
                <div className="clear"/>
            </div>
        )
    }
}

export default ListForm