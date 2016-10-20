/**
 * Created by karol on 19.10.2016.
 */
import React from 'react'
import {Button, ButtonToolbar, ButtonGroup} from 'react-bootstrap'
import {finalState} from '../../data/dataShops'



export default class Shops extends React.Component {
    constructor() {
        super()

        this.state = {
            Shops: []
        }
    }


    componentWillMount() {
        var context = this;
        context.setState({shops: finalState.shops})

    }
    render() {

        return (
            <div>
                <h1>Wybierz sklep lub sklepy do których chesz dojechać</h1>
                <ButtonToolbar>
                    <ButtonGroup> {this.state.shops.map(function (shops) {
                    return <Button bsStyle="primary" bsSize="large" id="button1" key={shops.id}>
                        {shops.name}
                    </Button>
                })}</ButtonGroup>
                <ButtonGroup>
                <Button bsStyle="primary" bsSize="large" class="button2">
                        Twoja Pozycja
                   </Button>
                    </ButtonGroup>
                    <ButtonGroup>
                   <Button bsStyle="primary" bsSize="large" class="button2">
                       Wyczyść
                   </Button>
                   </ButtonGroup>
                </ButtonToolbar>
            </div>
        )
    }
}