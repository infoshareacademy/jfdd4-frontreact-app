import React from 'react'

export default class EditScoreForm extends React.Component {

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
                this.props.handleSubmit(this.props.achievementId, this.state.value)
            }}>
                <input
                    type="text"
                    defaultValue={this.props.value}
                    onChange={(event) => this.setState({
                        value: event.target.value
                    })} />
                <button>Update score</button>
            </form>
        )
    }
}