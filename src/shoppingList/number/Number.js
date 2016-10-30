/**
 * Created by kbro2 on 26.10.2016.
 */
import React from 'react'

export default class Amount extends  React.Component {

    constructor() {
        super();
        this.state = {
            numberOfClicks: 0
        };
        this._plusClick = this._plusClick.bind(this)
        this._minusClick = this._minusClick.bind(this)
       
    }

    _plusClick() {
        this.setState({
            numberOfClicks: this.state.numberOfClicks + 1
        })
    }_minusClick() {
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
                <h3>Counter</h3>
                <h1>{this.props.children}
                    {this.state.numberOfClicks}
                </h1>
                <button
                    onClick={this._plusClick}>
                    Plus</button>
                <button
                    onClick={this._minusClick}>
                    Minus</button>
            </div>
        )
    }}