import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ITaskService } from '../service/abstraction/tasks.interface';

@Controller('tasks')
export class TasksController {
  constructor(
    @Inject('TASKS_SERVICE')
    private tasksService: ITaskService,
  ) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Get('remove/:taskId')
  removeTask(taskId: string) {
    return this.tasksService.removeTask(taskId);
  }

  @Post('create')
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    console.log(title, description);
    return this.tasksService.createTask(title, description);
  }
}
