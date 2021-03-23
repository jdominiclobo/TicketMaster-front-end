import React from 'react'
import TicketForm from './TicketForm'

function TicketEdit(props){
    const handleSubmit = (formData) => {
        console.log('edit submit',formData)
    }
    return(
        <div>
            <h2>Edit Customer</h2>
            <TicketForm handleSubmit={handleSubmit} />
        </div>
    )
}

export default TicketEdit