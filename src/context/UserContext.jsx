import { useContext, createContext, useReducer } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


const UserContext = createContext(null);
const UserDispatchContext = createContext(null);

const initialUser = {
  _id: null,
  userName: null,
  isLogged: null,
  userTeam: null
};

export const useUser = () => useContext(UserContext);
export const useUserDispatch = () => useContext(UserDispatchContext);

export const ACTIONS_TYPES = {
  login: 'login',
  logout: 'logout',
  updateUserTeam: 'updateUserTeam',
  deleteTeam: 'deleteTeam',
  tap: 'tap',
  setEnergy: 'setEnergy'
};




const userReducer = (user, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.login: {
      return action.payload;
    }

    case ACTIONS_TYPES.updateUserTeam: {
      const userObj = { ...user, userTeam: action.userTeam };
      return userObj;
    }

    case ACTIONS_TYPES.logout: {
      window.localStorage.clear();
      return initialUser;
    }

    case ACTIONS_TYPES.deleteTeam: {
      const userObj = { ...user, userTeam: null };
      return userObj;
    }

    case ACTIONS_TYPES.tap: {
      const userObj = {
        ...user,
        userTeam: { ...user.userTeam, ...action.payload }
      };
      return userObj;
    }

    case ACTIONS_TYPES.setEnergy: {
      const userObj = {
        ...user,
        energy: action.energy
      };
      return userObj;
    }

    default: {
      return user;
    }
  }
};


export const UserProvider = ({ children }) => {
  const [userLocalStorage, setUserLocalStorage] = useLocalStorage('user');
  const [user, dispatch] = useReducer(userReducer, userLocalStorage);


  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};