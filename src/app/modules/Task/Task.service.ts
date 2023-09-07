import ApiError from '../../../errors/ApiError';
import { ITask } from './Task.interface';
import { Task } from './Task.model';
import httpStatus from 'http-status';

const createTask = async (payload: ITask): Promise<ITask> => {
  try {
    const task = new Task(payload);
    await task.save();
    return task;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
};

const getAllTask = async (): Promise<ITask[]> => {
  try {
    const tasks = await Task.find();
    return tasks;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
};

const getTaskById = async (id: string): Promise<ITask | null> => {
  try {
    const task = await Task.findById({ _id: id });
    return task;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
};

const getTaskByTeamId = async (id: string): Promise<ITask | null> => {
  try {
    const getTaskByTeam = await Task.findOne({ team: id });
    return getTaskByTeam;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal server error'
    );
  }
};

const updateTaskById = async (
  id: string,
  payload: ITask
): Promise<ITask | null> => {
  try {
    const result = await Task.findOneAndUpdate(
      { _id: id },
      { ...payload },
      {
        new: true,
      }
    );
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal server error'
    );
  }
};

const deleteTaskById = async (id: string): Promise<ITask | null> => {
  try {
    const about = await Task.findByIdAndDelete(id);
    return about;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal server error'
    );
  }
};

export const TaskService = {
  createTask,
  getAllTask,
  getTaskById,
  updateTaskById,
  deleteTaskById,
  getTaskByTeamId,
};
