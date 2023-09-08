/* eslint-disable no-unused-vars */
import {  Model } from 'mongoose';

export type ITask = {
  title: string;
  description: string;
  dueDate: string;
  priorityLevel: string;
  assignTo: string[];
  taskAuthor: string;
  status?: string;
  team?: string;
};

export type TaskModel = Model<ITask, Record<string, unknown>>;
