import mongoose from 'mongoose';
import User from '../schemas/User.js';
import Team from '../schemas/Teams.js';

class UserService {
  async register(userData) {
    const user = await User.findOne({ userName: userData.userName });
    if (user) {
      throw new Error('User with this name is already exist');
    }
    const newUser = await User.create({ ...userData, isLogged: false });
    return newUser;
  }

  async login(userData) {
    const user = await User.findOne(userData);
    if (!user) {
      throw new Error('incorrect name or password');
    }
    if (user._id) {
      const newUser = await User.findByIdAndUpdate(user._id, { isLogged: true }, { new: true });
      return newUser;
    }
  }

  async logout(payload) {
    const user = await User.findOne(payload);
    if (user) {
      const newUser = await User.findByIdAndUpdate(user._id, { isLogged: false }, { new: true });
      return newUser;
    }
  }

  async createTeam({ team, id }) {
    const newId = new mongoose.mongo.ObjectId(id);
    const user = await User.findByIdAndUpdate({ _id: id }, { userTeam: team }, { new: true });
    const userTeam = await Team.create({ _id: newId, ...user.userTeam });
    return userTeam;
  }

  async editTeam({ editedTeam, id }) {
    const user = await User.findByIdAndUpdate({ _id: id }, { userTeam: editedTeam }, { new: true });
    const userTeam = await Team.findByIdAndUpdate({ _id: id }, { userTeam: editedTeam }, { new: true });
    return userTeam;
  }

  async deleteTeam(id) {
    const user = await User.findByIdAndUpdate({ _id: id }, { userTeam: null }, { new: true });
    const deleteCount = await Team.deleteOne({ _id: id });
    return deleteCount === 1;
  }

}

export default new UserService();