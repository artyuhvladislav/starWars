import UserService from "../services/User.js";

class User {

  async register(req, res, next) {
    try {
      const newUser = await UserService.register(req.body);
      res.json(newUser);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }


  async login(req, res) {
    try {
      const loggedUser = await UserService.login(req.body);
      res.json(loggedUser);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async logout(req, res) {
    try {
      const loggedOutUser = await UserService.logout(req.body);
      res.json(loggedOutUser);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async createTeam(req, res) {

    try {
      const userTeam = await UserService.createTeam(req.body);
      res.json(userTeam);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async deleteTeam(req, res) {
    try {
      const isTeamDeleted = await UserService.deleteTeam(req.body);
      res.json(isTeamDeleted);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async editTeam(req, res) {
    try {
      const editTeam = await UserService.editTeam(req.body);
      res.json(editTeam);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async updateEnergy(req, res) {
    try {
      const user = await UserService.updateEnergy(req.body);
      res.json(user);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

}

export default new User();