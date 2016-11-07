/**
 * Created by karol on 04.11.16.
 */
import React from 'react'
import {Well ,Link, PageHeader, Row, Button, Col, Grid, DropdownButton, MenuItem, Jumbotron,ListGroup, ListGroupItem} from 'react-bootstrap'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    list: state.oldListsData.list,

})

const OldList = ({list, shoppingList}) => (
    <Well>
        <PageHeader>Lista Zakupów</PageHeader>
        <Grid>
            <Row key={list.id}>
            <Col>
                <DropdownButton title="Zapisane listy" id="bg-nested-dropdown">
                {list
                .map(list => (
                    <MenuItem eventKey="1">
                        {list.name}
                    </MenuItem> ))}
                </DropdownButton>
            </Col>
            {/*<dir>*/}
            {/*<Button  >*/}
                    {/*<a id="close" href={"../shoppingList"}> Wróć </a>*/}
            {/*</Button>*/}
            {/*</dir>*/}
            </Row>
        </Grid>
    </Well>
);

export default connect(mapStateToProps)(OldList)