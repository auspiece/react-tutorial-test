import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from "./components/User";
import NavBar from "./components/navbar";
import Users from "./components/Users";
import AddUser from "./components/AddUser"

class App extends Component {
  // Bunu alıp context.js içine attık. Context api için.
  // state = {
  //   users: [
  //     {
  //       id : 1,
  //       name: "Burkay Elbek",
  //       salary : "5000",
  //       department: "Bilisim"
  //     },
  //     {
  //       id : 2,
  //       name: "Cagri Can",
  //       salary : "4000",
  //       department: "Pazarlama"
  //     },
  //     {
  //       id : 3,
  //       name: "Can Ozlemis",
  //       salary : "6000",
  //       department: "Uretim"
  //     }
      
  //   ]
  // }


  render() {
    return (
      <div className="container">
             <NavBar title="User App"/> {/* navbar.js componentinde prop type string olarak tanımladık. String girmeliyiz */}
            {/* title göndermezsek navbar.js içinde props özelliklerinden default app" olarak gelir.*/ }
            
            <hr/>
            <AddUser/>
            <Users/>
            {/* <Users userList = {this.state.users}/> /*Prop Drilling Yöntemi ile Stateleri Componentler Arası taşır */}

            {/* Users.js açtık. Bu userları dinamik olarak dolduracağız.
            
                <User               
              name = "Burkay"
              salary = "5000"
              department = "Bilişim"      
            /> Default olarak Bilgi yok gönderir props girmezsek. */}
      
            {/* <User
              name = "Can"
              salary = "6000"
              department = "Bilişim"         
            />  */}
      </div>
    )
  }
}



// function App() {
//   //const testt = 34;
//   //const isAuth = false;
//   return (
//     <div className="container">


//       <NavBar title="User App"/> {/* navbar.js componentinde prop type string olarak tanımladık. String girmeliyiz */}
//       {/* title göndermezsek navbar.js içinde props özelliklerinden default app" olarak gelir.*/ }
      
//       <hr/>
//       <User               
//         name = "Burkay"
//         salary = "5000"
//         department = "Bilişim"      
//       /> {/* Default olarak Bilgi yok gönderir props girmezsek.*/}

//       <User
//         name = "Can"
//         salary = "6000"
//         department = "Bilişim"      
      
//       />
      


//       {/* <h4>App Component</h4> 
//           <User/>
//       */}

//       {/* <h1>{testt}</h1>
//       <h1>{1+1}</h1>
//       <h1>1+1</h1>
//       <h1>{"burkay".toUpperCase()}</h1>

//       <div>
//         {
//           isAuth ? <p>Kullanıcı kayıtlı</p> : null
//         }
//       </div>  */}
      
//     </div>
//   );
// }

export default App;
