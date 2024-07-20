import UserTeamService from "../services/UserTeam.js";

class UserTeam {

  async create(req, res) {
    try {
      const userTeam = await UserTeamService.create(req.body);
      res.json(userTeam);
    } catch (error) {
      next(error.message);
      res.status(500).json(error.message);
    }
  }

}

export default new UserTeam();