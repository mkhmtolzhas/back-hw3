import mongoose, { Document, Schema } from 'mongoose';

export interface IAds extends Document {
  ads: object
}

// const AdsSchema: Schema = new Schema({
//   email: { type: String, required: true, unique: true },
//   username: { type: String},
//   title: { type: String, required: true },
// });

const AdsSchema: Schema = new Schema({
    ads: { type: Object }
  });
  

export default mongoose.model<IAds>('User', AdsSchema);
