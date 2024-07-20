import TeamsService from "../services/Teams.js";

class Teams {
  async getAll(_, res) {
    try {
      const teams = await TeamsService.getAll();
      res.json(teams);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

export default new Teams();