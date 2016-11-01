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
                this.props.handleSubmit(this.props.studentId, this.state.value)
            }}>
                <input
                    type="text"
                    defaultValue={this.state.value}
                    onChange={(event) => this.setState({
                        value: event.target.value
                    })} />
                <button>Add score</button>
            </form>
        )
    }
}