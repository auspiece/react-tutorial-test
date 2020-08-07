import React,{Component} from 'react';


// Provider, Consumer verir.
const UserContext = React.createContext();

const reducer = (state,action) => {
  switch(action.type){
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter(user => action.payload !== user.id)
      }

      case "ADD_USER": // users: state'de bulunan users'tan geliyor.
        return {
          ...state,
          users: [...state.users,action.payload] // array olduğundan dolayı eklemeyi bu tarz yaptık.
        }

      default:
        return state
  }
}

export class UserProvider extends Component {
    state = {
        users: [
          {
            id : "unique-1", //Normalde 1'di. Stringe çevirdik.
            name: "Burkay Elbek",
            salary : "5000",
            department: "Bilisim"
          },
          {
            id : "unique-2",
            name: "Cagri Can",
            salary : "4000",
            department: "Pazarlama"
          },
          {
            id : "unique-3",
            name: "Can Ozlemis",
            salary : "6000",
            department: "Uretim"
          }
          
        ],

        dispatch : action => {
          this.setState(state => reducer(state,action))
        }
      }
    render() {
        return (
             <UserContext.Provider value = {this.state}>
                 {this.props.children} {/**App Componentini simgeler. */}
             </UserContext.Provider>   
        )
    }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;


/* Spread Operatoru
  state = {
    a: 10,
    b: 20,
    c: 30
  }
  {
    ...state (Üstteki eski state değerleri yeni state buraya yerleşir)
              (a = 20 dersek a'nın yeni değerleri atanır.)
    *a: 20,
    b: 20,
    c: 30
  }

*/