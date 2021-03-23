import React from 'react'
import { connect } from 'react-redux'

function Account(props){
    return(
        <div>
            <h2>User Info</h2>
            <h5>Username -- {props.user.username}</h5>
            <h5>Email -- {props.user.email}</h5>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        user : state.user
    }
}
export default connect(mapStateToProps)(Account)