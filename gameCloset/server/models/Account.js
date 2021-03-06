import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AccountSchema = new Schema(
  {
    subs: [{ type: String, unique: true }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String },
    rank: { type: String, enum: ['Peasant', 'Squire', 'Knight', 'Champion', 'Royalty', 'Noob Slayer'], default: 'Peasant' },
    xp: { type: Number, default: 0 },
    badges: { type: Array },
    badge: { type: String, enum: ["That's sir to you", 'Collector', 'Hoarder', 'Earn a badge, knave!'], default: 'Earn a badge, knave!' }
    // NOTE If you wish to add additional properties do so here
    // NOTE that's sir to you is earned with knight rank.
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export const ProfileSchema = new Schema(
  {
    name: { type: String, required: true },
    picture: { type: String }
    // NOTE if you want to make properties from the account public put them here
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
