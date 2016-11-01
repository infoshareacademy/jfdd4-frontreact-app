/**
 * Created by kbro2 on 30.10.2016.
 */
import React from 'react'
import {Well} from 'react-bootstrap'
import { connect } from 'react-redux'
import ListForm from './list-form/ListForm'

const mapStateToProps = (state) => ({
   amounts: state.amountsData.amounts
})

const Amounts = ({amounts}) => (
   
    <Well>
        <ul>
            {amounts
                .map(amounts => {
                    return <tr key={amounts.id}>
                        <td>
                            <h3>{amounts.name}</h3>
                            {Object.keys(amounts.amounts).map(key => <ListForm shopName={key} quantity={amounts.amounts[key]} />)}
                        </td>
                    </tr>
                })}
        </ul>
    </Well>
    
);

export default connect (mapStateToProps)(Amounts)

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
