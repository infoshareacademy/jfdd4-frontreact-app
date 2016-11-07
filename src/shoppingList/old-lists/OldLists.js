/**
 * Created by karol on 04.11.16.
 */
import React from 'react'
import {Well ,Link, PageHeader, Row, Button, Col, Grid, DropdownButton, MenuItem, Jumbotron,ListGroup, ListGroupItem} from 'react-bootstrap'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    list: state.oldListsData.list,

})

class OldList extends React.Component {

    constructor() {
        super()

        this.state = {
            list: null
        }
    }
    render() {
        let {list, shoppingList} = this.props
       return (
            <Well>
                <PageHeader>Lista Zakupów</PageHeader>
                <Grid>
                    <Row key={list.id}>
                        <Col>
                            <DropdownButton title="Zapisane listy" id="bg-nested-dropdown">
                                {list
                                    .map(list => (
                                        <MenuItem eventKey="1" onSelect={() => this.setState({ list: list })}>
                                            {list.name}
                                        </MenuItem> ))}
                            </DropdownButton>
                        </Col>

                        <Col>
                            {this.state.list !== null ?
                                this.state.list.shoppingList.map( item => <p>{item.productName} w ilości {item.quantity} produkt,  za {item.price} ze sklepu {item.shopName}  </p>) : 'wybierz listę'
                            }
                            </Col>
                    </Row>
                </Grid>
            </Well>
        )
    }
}

export default connect(mapStateToProps)(OldList)