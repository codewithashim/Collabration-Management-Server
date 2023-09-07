/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, Types, model } from 'mongoose';
import { ITeam, TeamModel } from './Team.interface';
import { User } from '../Users/Users.model';

const teamSchema = new Schema<ITeam, Record<string, never>>(
  {
    name: {
      type: String,
      required: true,
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
        validate: {
          validator: async function (userId: string) {
            try {
              const userObjectId = new Types.ObjectId(userId as string);
              const user = await User.findById(userObjectId);
              if (!user) {
                return false;
              }
              return true;
            } catch (error) {
              return false;
            }
          },
          message: 'Invalid user ID in members array',
        },
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Team = model<ITeam, TeamModel>('Team', teamSchema);
