import mongoose from 'mongoose';

const User = new mongoose.Schema({
  userName: { type: (String || Number), required: true },
  userPassword: { type: (String || Number), required: true },
  isLogged: { type: Boolean, required: true },
  userTeam: { type: Object, default: null }
});

export default mongoose.model('User', User);