import mongoose from 'mongoose';
import User from '../schemas/User.js';
import Team from '../schemas/Teams.js';
import { ENERGY } from '../constants.js';

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

  async editTeam({ team, id, energy }) {
    const updateObj = { energy, lastActiveDate: new Date(), userTeam: team };
    const user = await User.findByIdAndUpdate({ _id: id }, updateObj, { new: true });
    const userTeam = await Team.findByIdAndUpdate({ _id: id }, { ...team }, { new: true });
    return userTeam;
  }

  async deleteTeam({ id }) {
    const user = await User.findByIdAndUpdate({ _id: id }, { userTeam: null }, { new: true });
    const deleteCount = await Team.deleteOne({ _id: id });
    return deleteCount.acknowledged;
  }

  async updateEnergy({ id }) {

    const user = await User.findById({ _id: id });
    const hours = (new Date() - user.lastActiveDate) / (1000 * 60 * 60);
    if (hours >= 24) {
      const updateObj = { energy: ENERGY, lastActiveDate: new Date() };
      const user = await User.findByIdAndUpdate({ _id: id }, updateObj, { new: true });
      return user;
    }
  }
}

export default new UserService();