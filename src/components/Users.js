import React, { Component } from 'react'
import User from "./User";
import UserConsumer from "../context";

 class Users extends Component {
    render() {

        return(
            <UserConsumer>
                {
                    value => {
                        const {users} = value
                        return (
                            <div>
                                {
                                    users.map(user => {
                                        return (
                                            <User
                                                key={user.id}
                                                id = {user.id}
                                                name = {user.name}
                                                salary = {user.salary}
                                                department = {user.department}
                                            
                                            />
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )

        // const {userList} = this.props; //App.js içindeki Users'a dinamik olarak veri gönderdik.
        // console.log(userList);
        // return (
        //     <div>
        //         {
        //             userList.map(user => {
        //                 return (
        //                     <User
        //                         key={user.id}
        //                         id = {user.id}
        //                         name = {user.name}
        //                         salary = {user.salary}
        //                         department = {user.department}
                            
        //                     />
        //                 )
        //             })
        //         }
        //     </div>
        // )
    }
}

export default Users;