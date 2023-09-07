/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import { ITask, TaskModel } from './Task.interface';

const taskSchema = new Schema<ITask, Record<string, never>>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    dueDate: {
      type: String,
      required: true,
    },
    priorityLevel: {
      type: String,
    },
    taskAuthor: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: 'pending',
    },
    team: {
      type: Schema.Types.ObjectId,
      ref: 'Team',
    },
    assignTo: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
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

export const Task = model<ITask, TaskModel>('Task', taskSchema);
