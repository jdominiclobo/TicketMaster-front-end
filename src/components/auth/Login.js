import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
    constructor() {
        super();
        this.state = { 
            email : '',
            password : ''
         }
    }

    handleChange = (e) => {
        this.setState ({
            [e.target.name] : e.target.value
        })
    }


    handleSubmit = () => {

    }


    render() { 
        return ( 
            <div className="container">
                <div className="justify-content-md-center">
                    <form className="form-signin" onSubmit={this.handleSubmit}>
                        <h1 className="h1 mb-3 font-weight-normal text-center">Login</h1>
                        <input  className="form-control mb-3" type="email" name="email" value={this.state.email} placeholder="Email" onChange={this.handleChange} />
                        <input  className="form-control mb-3" type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleChange}  />
                        <input className="btn btn-lg btn-info btn-block" type="submit" value="Login" />

                    </form>
                </div>
            </div>
         );
    }
}
 
export default connect()(Login);