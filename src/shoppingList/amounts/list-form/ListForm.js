import React from 'react'

class ListForm extends React.Component {
    constructor() {
        super()

        this.state = {
            id: '',
            amounts: ''
        }
    }

    render() {
        return (
            <form onSubmit={(event) => {
                event.preventDefault()
                this.props.handleSubmit( this.state.id, this.state.amounts)
            }}/>
        )
    }
}

export default ListForm