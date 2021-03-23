import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Tabs, Tab} from 'react-bootstrap-tabs'
import Chart from 'react-apexcharts'


import { startRemoveTicket, startEditTicket } from '../../actions/ticketsAction'

import { findCustomer } from '../../selectors/customerSelector'
import { findDepartment } from '../../selectors/departmentSelector'
import { findEmployee } from '../../selectors/employeeSelector'
 
class TicketList extends Component{
    constructor(props){
        super(props)
        this.state = {
            search : '',
            donutOptions: {labels: ['High', 'Medium', 'Low'],colors: ['#ff0000', '#ba0f0f', '#f55b5b']}
        }
    }
    serieDonutFunction = () => {
        let results=[],labels=['High', 'Medium', 'Low'];
        for(let i=0;i<3;i++){
            results.push(this.props.tickets.filter(tkt=>tkt.priority===labels[i]).length)
        }
        return results
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleRemove = (id) => {
        this.props.dispatch(startRemoveTicket(id))
    }
    handleCheck = (id , isResolved) => {
        const formData = {
            isResolved : !isResolved
        }
        this.props.dispatch(startEditTicket(formData, id))
    }
   render(){
       return(
        <div>
        <input type="text" placeholder="code" name="search" value={this.state.search} onChange={this.handleChange} />
        <Tabs onSelect={(index, label) => console.log(label + ' selected')}>

        <Tab label="Pending">
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Code No</th>
                    <th>Customer</th>
                    <th>Department</th>
                    <th>Employees</th>
                    <th>Message</th>
                    <th>Priority</th>
                    <th>Actions</th>
                    <th>Remove</th>
                    <th>Complete</th>
                </tr>
            </thead>
            <tbody>
                {  this.props.tickets.filter(tkt=>{
                    if(tkt.code.includes(this.state.search)){
                    return tkt 
                }
                }).filter(tkt=>tkt.isResolved===false).map( tkt => {
                return(<tr key={tkt._id}>
                <td>{tkt.code}{console.log(tkt)}</td>
                <td>{findCustomer(this.props.customers, tkt.customer) ? findCustomer(this.props.customers, tkt.customer).name : ''}</td>
                <td>{findDepartment(this.props.departments, tkt.department) ? findDepartment(this.props.departments, tkt.department).name : ''}</td>
                <td>{tkt.employees.map(e=>findEmployee(this.props.employees,e._id) ? findEmployee(this.props.employees,e._id).name + ', ':'')}</td>
                <td>{tkt.message}</td>
                <td>{tkt.priority}</td>
                <td><a href={'/tickets/'+tkt._id}><button className="btn btn-info">SHOW</button></a></td>
                <td><button className="btn btn-danger" onClick={()=>{this.handleRemove(tkt._id)}}>Remove</button></td>
                <td><input type='checkbox' checked={tkt.isResolved} onChange={()=>{this.handleCheck(tkt._id, tkt.isResolved)}} /></td>
                </tr>)
                })}
            </tbody>
        </table>
        </Tab>
        <Tab label="Complete">
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Code No</th>
                    <th>Customer</th>
                    <th>Department</th>
                    <th>Employees</th>
                    <th>Message</th>
                    <th>Priority</th>
                    <th>Actions</th>
                    <th>Remove</th>
                    <th>Complete</th>
                </tr>
            </thead>
            <tbody>
                {  this.props.tickets.filter(tkt=>{
                    if(tkt.code.includes(this.state.search)){
                    return tkt 
                }
                }).filter(tkt=>tkt.isResolved===true).map( tkt => {
                return(<tr key={tkt._id}>
                <td>{tkt.code}{console.log(tkt)}</td>
                <td>{findCustomer(this.props.customers, tkt.customer) ? findCustomer(this.props.customers, tkt.customer).name : ''}</td>
                <td>{findDepartment(this.props.departments, tkt.department) ? findDepartment(this.props.departments, tkt.department).name : ''}</td>
                <td>{tkt.employees.map(e=>findEmployee(this.props.employees,e._id) ? findEmployee(this.props.employees,e._id).name + ', ':'')}</td>
                <td>{tkt.message}</td>
                <td>{tkt.priority}</td>
                <td><a href={'/tickets/'+tkt._id}><button className="btn btn-info">SHOW</button></a></td>
                <td><button className="btn btn-danger" onClick={()=>{this.handleRemove(tkt._id)}}>Remove</button></td>
                <td><input type='checkbox' checked={tkt.isResolved} onChange={()=>{this.handleCheck(tkt._id, tkt.isResolved)}} /></td>
                </tr>)
                })}
            </tbody>
        </table>
        </Tab>
        </Tabs>
        <div >
        
        <a href='/tickets/new'>Add Tickets</a><br/><br/>
        </div>
        <Chart options={this.state.donutOptions} series={this.serieDonutFunction()} type="donut" width="380" />
        </div>
        
    )}
            }
const mapStateToProps = (state) => {
    return {
        tickets : state.tickets,
        customers : state.customers,
        departments : state.departments,
        employees : state.employees
    }
}

export default connect(mapStateToProps)(TicketList)