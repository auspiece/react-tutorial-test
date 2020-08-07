import React, { Component } from 'react' //rcc ile shortcut oluşturma.
import PropTypes from 'prop-types'
import UserConsumer from "../context";



// class User extends Component { //App.js içinde <h4>AppComponent ile beraber kullanılan component</h4>
//     render() {
//         return (
//             <div>
//                 <form>
//                     <input type="text"></input>
//                     <button>Send</button>
//                 </form>
//             </div>
//         )
//     }
// }

class User extends Component {

    static defaultProps={
        name : "Bilgi Yok",
        salary : "Bilgi Yok",
        department : "Bilgi Yok"
        
    }
    //Constructor ile Bind etme işlemi
    // constructor(props){
    //     super(props);
    //     this.onClickEvent = this.onClickEvent.bind(this);
    // }

    // onClickEvent(e){
    //     console.log(this);

    // }

    // Arrow function bind etme işlemini yapar. e = event parametresidir.
    onClickEvent = (e) =>  {
        this.setState({
            isVisible : !this.state.isVisible
        })
    }

    onDeleteUser = (dispatch,e) =>{
        const {id} = this.props;
        //Consumer Dispatch yapılacak.
        dispatch({type : "DELETE_USER",payload:id})
    }


    // constructor(props){ //Constructor şeklinde state oluşturduk
    //     super(props);

    //     this.state = {
    //         isVisible : false
    //     }
    // }

    // State oluşturma 2.yöntem
    state = {
        isVisible : false
    }

    render() {
        //Destructing JavaScript
        const{name,department,salary} = this.props
        const{isVisible} = this.state

        return(
            <UserConsumer>
                {
                    value => {
                        const{dispatch} = value;
                        return (
                            <div className="col-md-8 mb-4">
                                <div className="card" style ={isVisible ? {backgroundColor : "#62848d", color : "white"} : null}>
                                    <div className="card-header d-flex justify-content-between">
                                        <h4 className="d-inline" onClick={this.onClickEvent}>{name}</h4>
                                        <i onClick={this.onDeleteUser.bind(this,dispatch)} className="far fa-trash-alt" style={{cursor:"pointer"}}></i>
                
                                    </div>
                                    {/*Temel State oluşturma Örneği */}
                                    {
                                        isVisible ?  <div className="card-body">
                                        <p className="card-text">Maas: {salary}</p>
                                        <p className="card-text">Departman: {department}</p>
                                        </div>
                                        : null
                                    }
                                   
                                </div>
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )

        // return (
        //     <div className="col-md-8 mb-4">
        //         {/* <ul>
        //             {/* <li>İsim: {this.props.name}</li>
        //             <li>Departman: {this.props.department}</li>
        //             <li>Maaş: {this.props.salary}</li> */}

        //             {/* <li>İsim: {name}</li>
        //             <li>Departman: {department}</li>
        //             <li>Maaş: {salary}</li> 
        //         </ul> */}

        //         <div className="card">
        //             <div className="card-header d-flex justify-content-between">
        //                 {/* <h4 className="d-inline" onClick={this.onClickEvent.bind(this)}>{name}</h4> Kendi methodumuzu bu şekilde tihs methoduyla çalıştırabiliriz.*/}
        //                 {/* <h4 className="d-inline" onClick={this.onClickEvent}>{name}</h4> Constructor içinde bind edebiliriz. */}
        //                 <h4 className="d-inline" onClick={this.onClickEvent}>{name}</h4>
        //                 <i onClick={this.onDeleteUser} className="far fa-trash-alt" style={{cursor:"pointer"}}></i>

        //             </div>
        //             {/*Temel State oluşturma Örneği */}
        //             {
        //                 isVisible ?  <div className="card-body">
        //                 <p className="card-text">Maas: {salary}</p>
        //                 <p className="card-text">Departman: {department}</p>
        //                 </div>
        //                 : null
        //             }
                   
        //         </div>
        //     </div>
        // )
    }
}


User.propTypes = {
    name : PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    department : PropTypes.string.isRequired,
    id : PropTypes.string.isRequired
}

// User.defaultProps = { //Üstte static olarakta tanımlanabilir
//     name : "Bilgi Yok",
//     salary : "Bilgi Yok",
//     department : "Bilgi Yok"
// }
export default User;