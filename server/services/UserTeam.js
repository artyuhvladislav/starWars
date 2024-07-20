import User from '../schemas/User.js';
import Team from '../schemas/Teams.js';

class UserTeam {
  async create(team) {

    const userTeam = await Team.create(team);
    // const userTeam = await User.findOne({ userName: userData.userName });
    // if (userTeam) {
    //   throw new Error('User can create only 1 team');
    // }

    // const newUser = await User.create({ ...userData,  });
    // return newUser;
  }
}

export default new UserTeam();