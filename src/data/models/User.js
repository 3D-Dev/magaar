import mongoose from 'mongoose';

delete mongoose.connection.models.User;

const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String },
  emailConfirmed: { type: Boolean, default: true },
  date: { type: Date, default: Date.now },
});

export default mongoose.model('User', userSchema);
