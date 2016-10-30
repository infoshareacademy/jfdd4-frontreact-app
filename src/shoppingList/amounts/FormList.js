/**
 * Created by kbro2 on 30.10.2016.
 */
import React from 'react'
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import { connect } from 'react-redux'
import { activateFilter, addScore, deleteScore, updateScore } from './actionCreators'

const mapStateToProps = (state) => ({
    amounts: state.amountsData.amounts,
    fetchingAmounts: state.amountsData.fetchingAmounts
})

const mapDispatchToProps = (dispatch) => ({

});

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

const FormList = ({
    fetchingAmounts,
}) => (

    <FormGroup controlId="formControlsSelect">
        <ControlLabel>Select</ControlLabel>
        <FormControl componentClass="select" placeholder="select">
            <option value="select">select</option>
            <option value="other">...</option>
        </FormControl>
    </FormGroup>

export default connect(mapStateToProps, mapDispatchToProps)(FormList)
