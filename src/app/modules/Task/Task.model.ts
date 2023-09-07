/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import { ITask, TaskModel } from './Task.interface';

const userSchema = new Schema<ITask, Record<string, never>>(
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
      required: true,
    },
    taskAuthor: {
      type: String,
      required: true,
    },
    assignUser: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Task = model<ITask, TaskModel>('Task', userSchema);
