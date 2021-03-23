import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

import { findTicket } from '../../selectors/ticketSelector'
import { findCustomer } from '../../selectors/customerSelector' 

class TicketForm extends React.Component{
    constructor(props){
        super(props)
        const ticketPriority = (tkt) => {
            if(tkt.priority === 'High'){
                return {High : true, Medium : false, Low : false}
            } else if(tkt.priority === 'Medium'){
                return {High : false, Medium : true, Low : false}
            } else{
                return {High : false, Medium : false, Low : true}
            }
        }
        this.state = {
            code : props.ticket? props.ticket.code : '',
            customer : props.ticket? findCustomer(props.customers, props.ticket.customer).name : '',
            department : props.ticket? props.ticket.department : '',
            employees : props.ticket? props.ticket.employees : [],
            message : props.ticket? props.ticket.message : '',
            priority : props.ticket? ticketPriority(props.ticket) : {High : false, Medium : false, Low : false},
            multiSel : []
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleMultiChange = (e) => {
        const x = e.target
        this.setState({multiSel : x.options})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.multiSel)
        let res =[]
        for(let i=0; i < this.state.multiSel.length; i++){
            if(this.state.multiSel[i].selected){
                const r = this.state.multiSel[i].value
                        res = res.concat({_id : r})   
            }
        }
        console.log(res)
        const formData = {
            code : this.state.code,
            customer : this.state.customer,
            department : this.state.department,
            employees : res,
            message : this.state.message,
            priority : this.state.priority
        }
        this.props.handleSubmit(formData)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input placeholder='Code' name='code' value={this.state.code} onChange={this.handleChange} /><br/><br/>
                <select name='customer' defaultselected={this.customer} onChange={this.handleChange}>
                        <option value=''>Choose a customer</option>
                        {this.props.customers.map(cust => {
                            return <option key={ cust._id } value={cust._id}>{cust.name}</option>
                        })}
                </select><br/><br/>
                <select name='department' onChange={this.handleChange}>
                        <option value='' defaultselected="true">Choose department</option>
                        {this.props.departments.map(dept => {
                            return <option key={dept._id} value={dept._id}>{dept.name}</option>
                        })}
                </select><br/><br/>
                <select id='emp' multiple onChange={this.handleMultiChange}>
                        <option value='' disabled>Choose employees</option>
                        {this.props.employees.map(emp => {
                            return <option key={emp._id} value={emp._id}>{emp.name}</option>
                        })}
                </select><br/><br/>
                <label htmlFor='message'>Message</label><br/>
                <textarea id='message' name='message' value={this.state.message} onChange={this.handleChange}></textarea><br/><br/>
                <input type='radio' id='priority1' name='priority' value='High' defaultChecked={this.state.priority.High} onChange={this.handleChange} />
                <label htmlFor='priority1'>High</label>
                <br/>
                <input type='radio' id='priority2' name='priority' value='Medium' defaultChecked={this.state.priority.Medium} onChange={this.handleChange} />
                <label htmlFor='priority2'>Medium</label>
                <br/>
                <input type='radio' id='priority3' name='priority' value='Low' defaultChecked={this.state.priority.Low} onChange={this.handleChange} />
                <label htmlFor='priority3'>Low</label>
                <br/>
                <input type='submit' value='Add' />
            </form>
        )
    }
}
const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        ticket : findTicket(state.tickets, id),
        customers : state.customers,
        departments : state.departments,
        employees : state.employees
    }
}
export default withRouter(connect(mapStateToProps)(TicketForm))