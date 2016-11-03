/**
 * Created by karol on 03.11.16.
 */

import React from 'react'
import {Button} from 'react-bootstrap'

export default class ListNameForm extends React.Component {

    constructor() {
        super()
        this.state = {
            name: ''
        }
    }

    render() {
        return (
            <form onSubmit={(event) => {
            console.log('WTF')
                event.preventDefault()
                this.props.handleSubmit(this.state.name, this.props.items)
            }}>
                <input
                    type="text"
                    defaultValue={this.state.name}
                    onChange={(event) => this.setState({
                        name: event.target.name
                    })} />
                <button>Zapisz Listę</button>
            </form>
        )
    }
}
