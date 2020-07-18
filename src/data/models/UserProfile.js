import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

delete mongoose.connection.models.UserProfile;

const { Schema } = mongoose;

const userProfileSchema = new Schema({
  displayName: { type: String },
  password: { type: String, default: '' },
  picture: { type: String },
  gender: { type: String },
  location: { type: String },
  website: { type: String },
  date: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

userProfileSchema.pre('save', function(next) {
  if (this.password) {
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
  }
  next();
});

export default mongoose.model('UserProfile', userProfileSchema);
