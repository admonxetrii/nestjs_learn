import { Task } from '../../entity/tasks.model';

export const TASKS_SERVICE = 'TASKS_SERVICE';

export interface ITaskService {
  getAllTasks(): Task[];
  removeTask(taskId: string): any;
  createTask(title: string, description: string): Task;
}
