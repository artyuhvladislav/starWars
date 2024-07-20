import mongoose from 'mongoose';

const UserTeam = new mongoose.Schema({
  name: { type: String, required: true, default: 'team name' },
  stars: { type: Number, required: true, default: 0 },
  points: { type: Number, required: true, default: 0 },
  passAccuracy: { type: Number, required: true, default: 0 }
});

export default mongoose.model('UserTeam', UserTeam);