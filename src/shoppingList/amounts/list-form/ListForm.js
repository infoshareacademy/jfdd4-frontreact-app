import React from 'react'
import {Button} from 'react-bootstrap'

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
            <div className="counter">

                {this.props.shopName}: {this.props.quantity - this.state.numberOfClicks}
                <button
                    onClick={this._plusClick}>
                    Plus
                </button>
                {this.state.numberOfClicks}
                <button
                    onClick={this._minusClick}>
                    Minus
                </button>
                <Button onClick={() => this.props.addToList(this.props.shopName, this.props.productName, this.state.numberOfClicks)}>
                    Dodaj do listy
                </Button>
            </div>
        )
    }
}

export default ListForm