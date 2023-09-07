/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export type ITask = {
  title: string;
  description: string;
  dueDate: string;
  priorityLevel: string;
  assignUser: Array<string>;
  taskAuthor: string;
};

export type TaskModel = Model<ITask, Record<string, unknown>>;
