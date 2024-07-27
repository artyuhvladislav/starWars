import { createContext, useContext, useReducer } from "react";

const TeamsContext = createContext([]);
const TeamsDispatchContext = createContext(null);

export const ACTIONS_TYPES = {
  getTeams: 'getTeams',
  sort: 'sort',
  search: 'search',
  userTeamUpdate: 'userTeamUpdate',
};

export const useTeams = () => useContext(TeamsContext);
export const useTeamsDispatch = () => useContext(TeamsDispatchContext);

const teamsReducer = (teams, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.getTeams: {
      return action.payload;
    }

    case ACTIONS_TYPES.sort: {

      const sorted = teams.slice();
      const sortName = action.sortName;
      const sortDirection = action.sortDirection;
      const isSortWithNumber = typeof sorted[0][sortName] === 'number';

      if (isSortWithNumber) {
        if (sortDirection === 'up') {
          sorted.sort((a, b) => b[sortName] - a[sortName]);
        } else if (sortDirection === 'down') {
          sorted.sort((a, b) => a[sortName] - b[sortName]);
        }
      } else {
        if (sortDirection === 'up') {
          sorted.sort((a, b) => b[sortName].toLowerCase().localeCompare(a[sortName].toLowerCase()));
        } else if (sortDirection === 'down') {
          sorted.sort((a, b) => a[sortName].toLowerCase().localeCompare(b[sortName].toLowerCase()));
        }
      }
      return sorted;
    }

    case ACTIONS_TYPES.search: {
      const search = action.value.toLowerCase();
      return [...teams].filter(team => {
        const teamName = team.name.toLowerCase();
        const userName = team.userName.toLowerCase();
        return teamName.includes(search) || userName.includes(search);
      });
    }

    default: {
      return teams;
    }
  }
};

export const TeamsProvider = ({ children }) => {

  const [teams, dispatch] = useReducer(teamsReducer, []);

  return (
    <TeamsContext.Provider value={teams}>
      <TeamsDispatchContext.Provider value={dispatch}>
        {children}
      </TeamsDispatchContext.Provider>
    </TeamsContext.Provider>
  );
}

