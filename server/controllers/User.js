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

}

export default new User();