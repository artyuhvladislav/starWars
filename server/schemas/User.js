import mongoose from 'mongoose';
import { ENERGY } from '../constants.js';

const User = new mongoose.Schema({
  userName: { type: (String || Number), required: true },
  userPassword: { type: (String || Number), required: true },
  isLogged: { type: Boolean, required: true },
  userTeam: { type: Object, default: null },
  lastActiveDate: { type: Date, default: new Date() },
  energy: { type: Number, default: ENERGY },
  userPoints: {
    points: Number,
    passAccuracy: Number
  }
});

export default mongoose.model('User', User);