import mongoose from 'mongoose';

const Team = new mongoose.Schema({
  userName: { type: String },
  name: { type: String },
  stars: { type: Number },
  points: { type: Number },
  passAccuracy: { type: Number }
});

export default mongoose.model('Team', Team);
