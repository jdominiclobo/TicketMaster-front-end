import React from 'react'
import { connect } from 'react-redux'

import TicketForm from './TicketForm'
import {startAddTicket} from '../../actions/ticketsAction'

function TicketNew(props){
    const handleSubmit = (formData) => {
        const redirect = () => props.history.push('/tickets')
        props.dispatch(startAddTicket( formData, redirect))
    }
    return(
        <div align='left'>
            <h2>Add Ticket</h2>
            <TicketForm handleSubmit={handleSubmit} />
        </div>
    )
}

export default connect()(TicketNew)