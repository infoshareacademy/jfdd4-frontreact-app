/**
 * Created by kbro2 on 30.10.2016.
 */
import React from 'react'
// import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import { connect } from 'react-redux'


const mapStateToProps = (state) => ({
    amounts: state.amountsData.amounts,
    fetchingAmounts: state.amountsData.fetchingAmounts,
})

const mapDispatchToProps = (dispatch) => ({

});

const Amounts = (props) => (
    <Well>
        <PageHeader>Lista Zakupów
            <small> zrób listę</small>
        </PageHeader>
        <Row>
            <Col>
                <ul>
                    {amounts
                        .map(amounts =>
                            <li key={amounts.id}>
                                {amounts.amounts}
                            </li>
                        )
                    }
                </ul>
            </Col>
        </Row>
    </Well>
);
    
export default connect(mapStateToProps)(Amounts)



//
// function FieldGroup({ id, label, help, ...props }) {
//     return (
//         <FormGroup controlId={id}>
//             <ControlLabel>{label}</ControlLabel>
//             <FormControl {...props} />
//             {help && <HelpBlock>{help}</HelpBlock>}
//         </FormGroup>
//     );
// }
//
// const FormList = ({
//     fetchingAmounts,
// }) => (
//
//     <FormGroup controlId="formControlsSelect">
//         <ControlLabel>Wybierz sklep</ControlLabel>
//         <FormControl componentClass="select" placeholder="select">
//             <option value="select">select</option>
//             <option value="other">...</option>
//         </FormControl>
//     </FormGroup>
// )
//
// export default connect (mapStateToProps, mapDispatchToProps)(Amounts)
//
// {fetchingStudents ? <p>Fetching students...</p> : null}
// <Table striped bordered condensed hover>
//     <thead>
//     </thead>
//         {amounts
//             .map(amounts => (
//                 <tr key={amounts.id}>
//                     <td>{amounts.name}</td>
//                     <td>{amounts.amounts}</td>
