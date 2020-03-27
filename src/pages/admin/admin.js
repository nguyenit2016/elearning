import React, { Component } from 'react';
import * as action from './../../redux/action';
import { connect } from 'react-redux';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: "",
            matKhau: ""
        }
    }

    handleOnchange = (event) => {
        let { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    submitDangNhap = (event) => {
        event.preventDefault();
        this.props.loginAdmin(this.state, this.props.history);
    }

    render() {
        return (
            <div className="container">
                <div className="col-sm-6 mx-auto">
                    <form onSubmit={this.submitDangNhap}>
                        <div className="form-group">
                            <label htmlFor="">Username</label>
                            <input type="text" className="form-control" name="taiKhoan" onChange={this.handleOnchange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="text" className="form-control" name="matKhau" onChange={this.handleOnchange} />
                        </div>
                        <button type="submit" className="btn btn-success">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // deleteUser: (userId) => {
        //     let action = {
        //         type: 'DELETE',
        //         userId: userId
        //     };
        //     dispatch(action);
        // },
        loginAdmin: (user, history) => {
            dispatch(action.actLoginAdmin(user, history))
        }
    }
}

export default connect(null, mapDispatchToProps)(Admin);