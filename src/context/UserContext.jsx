import { useContext, createContext, useReducer } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


const UserContext = createContext(null);
const UserDispatchContext = createContext(null);

const initialUser = {
  id: null,
  userName: null,
  isLogged: null,
  userTeam: null
};

export const useUser = () => useContext(UserContext);
export const useUserDispatch = () => useContext(UserDispatchContext);
export const ACTIONS_TYPES = {
  login: 'login',
  logout: 'logout',
  updateUserTeam: 'updateUserTeam'
};




const userReducer = (user, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.login: {
      return action.payload;
    }

    case ACTIONS_TYPES.updateUserTeam: {
      return { ...user, userTeam: action.userTeam };
    }

    case ACTIONS_TYPES.logout: {
      window.localStorage.clear();
      return initialUser;
    }

    default: {
      return user;
    }
  }
};


export const UserProvider = ({ children }) => {
  const [userLocalStorage, setUserLocalStorage] = useLocalStorage('userName');
  const [user, dispatch] = useReducer(userReducer, userLocalStorage);


  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};