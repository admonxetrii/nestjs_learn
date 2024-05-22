import { Injectable } from '@nestjs/common';
import { ITaskService } from '../abstraction/tasks.interface';
import { Task, TaskStatus } from '../../entity/tasks.model';
import { v4 } from 'uuid';

@Injectable()
export class TasksService implements ITaskService {
  private tasks: Task[] = [];

  getAllTasks() {
    return this.tasks;
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    return 'Task removed successfully!';
  }

  createTask(title: string, description: string) {
    const task: Task = {
      id: v4(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
}
