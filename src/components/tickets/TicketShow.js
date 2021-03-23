import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { findTicket } from '../../selectors/ticketSelector'

function TicketShow(props){
    const {_id , code} = props.ticket || {}
    return(
        <div>
            <Link to={'/tickets/edit/'+_id}>Edit</Link>
            <h2> Ticket : { code }</h2>
            <Link to="/tickets">back</Link>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        ticket : findTicket(state.tickets, id)
    }
}

export default connect(mapStateToProps)(TicketShow)