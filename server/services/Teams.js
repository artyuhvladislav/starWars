import Team from '../schemas/Teams.js';

class Teams {
  async getAll() {
    const teams = await Team.find();
    return teams;
  }
}

export default new Teams();