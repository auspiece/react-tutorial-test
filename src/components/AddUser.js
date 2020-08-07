import React, { Component } from 'react'
import posed from 'react-pose'
import UserConsumer from "../context";
import User from './User';

var uniqid = require('uniqid'); // Uniqid yaratmak için kullanıyoruz.

const Animation = posed.div({
    visible : {
        opacity:1,
        applyAtStart : {
            display : "block"
        }

     },
    hidden : {
        opacity:0,
        applyAtEnd : {
            display : "none"
        }
    }
});

class AddUser extends Component {

    state = {
        visible : false,
        name : "",
        department : "",
        salary : ""
    }

    changeVisibility = (e) => {
        this.setState({
            visible : !this.state.visible
        })
    }

    changeInput = (e) =>{
        this.setState({
            // name = "name" kullanacağız. Yani name özelliğini kullanarak state'yi anlık güncelleyeceğiz.
            [e.target.name] : e.target.value,
        })
    }

    addUserForm = (dispatch,e) => {
        e.preventDefault();
        const {name,department,salary} = this.state

        const newUser = {
            id : uniqid(),
            // name : name,
            // department :department,
            // salary : salary
            name,
            department,
            salary
        }

        dispatch({type: "ADD_USER",payload:newUser})
    }


    /*TEK TEK ÖZEL değiştirebiliriz */
    // changeName = (e) => {
    //     this.setState({
    //         name : e.target.value
    //     })
    // }
    // changeDepartment = (e) => {
    //     this.setState({
    //         department : e.target.value
    //     })
    // }
    // changeSalary = (e) => {
    //     this.setState({
    //         salary : e.target.value
    //     })
    // }
    render() {
        const {visible,name,department,salary} = this.state;
        
        return(
            <UserConsumer>
                {
                    value => {

                        const {dispatch} = value;

                        return (
                            <div className="col-md-8 mb-4">
                                <button onClick = {this.changeVisibility} className = "btn btn-dark btn-block mb-2">{visible ? "Hide Form" : "Show Form"}</button> 
                                
                                <Animation pose = {visible ? "visible" : "hidden"}>
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Add user Form</h4>
                                    </div>
                                    <div className = "card-body">
                
                                        <form onSubmit={this.addUserForm.bind(this,dispatch)}> {/* Dispatch tanımladık ve fonskiyonda çağırdık */}
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input type="text" 
                                                name="name" 
                                                id="id" 
                                                placeholder="Enter Name" 
                                                className="form-control"
                                                value = {name}
                                                // onChange = {this.changeName} // Teker teker yaptığımız için böyle yaptık.
                                                onChange = {this.changeInput} // Tek bir fonksiyon içinde yaptık.
                                                ></input>
                
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="department">Department</label>
                                                <input type="text" 
                                                name="department" 
                                                id="departmentid" 
                                                placeholder="Enter department" 
                                                className="form-control"
                                                value = {department}
                                                // onChange = {this.changeDepartment}
                                                onChange = {this.changeInput}
                                                ></input>
                                                
                                                    
                                                
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="salary">Salary</label>
                                                <input type="text" 
                                                name="salary" 
                                                id="salaryid" 
                                                placeholder="Enter salary" 
                                                className="form-control"
                                                value = {salary}
                                                // onChange = {this.changeSalary}
                                                onChange = {this.changeInput}
                                                ></input>
                     
                                            </div>
                                            <button className="btn btn-danger btn-block" type="submit">Add User</button>
                                        </form>
                                    </div>
                                </div>
                                </Animation>
                            </div>
                        )

                    }
                }
            </UserConsumer>
        )
        
        
        
    }
}

export default AddUser;
