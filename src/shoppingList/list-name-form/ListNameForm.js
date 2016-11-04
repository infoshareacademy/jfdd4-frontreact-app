/**
 * Created by karol on 03.11.16.
 */

import React from 'react'
import {Button} from 'react-bootstrap'

export default class ListNameForm extends React.Component {

    constructor() {
        super()
        this.state = {
            name: '....'
        }
    }

    render() {
        return (
            <form onSubmit={(event) => {
            console.log('WTF')
                event.preventDefault()
                this.props.handleSubmit(this.props.items, this.state.name)
            }}>
                <input
                    type="text"
                    defaultValue={this.state.name}
                    onChange={(event) => this.setState({
                        name: event.target.value
                    })} />
                <button>Zapisz Listę</button>
            </form>
        )
    }
}
