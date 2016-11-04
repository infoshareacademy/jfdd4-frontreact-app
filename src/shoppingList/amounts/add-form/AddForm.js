import React from 'react'

export default class AddForm extends React.Component {

    constructor() {
        super()
        this.state = {
            value: 'Enter score...'
        }
    }

    render() {
        return (
            <form onSubmit={(event) => {
                event.preventDefault()
                this.props.handleSubmit(this.props.amountsId, this.state.name)
            }}>
                <input
                    type="text"
                    defaultValue={this.state.name}
                    onChange={(event) => this.setState({
                        value: event.target.name
                    })} />
                <button>Add score</button>
            </form>
        )
    }
}