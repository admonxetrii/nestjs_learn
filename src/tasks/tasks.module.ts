import { Module } from '@nestjs/common';
import { TasksController } from './controller/tasks.controller';
import { TasksService } from './service/implementation/tasks.service';

@Module({
  controllers: [TasksController],
  providers: [
    {
      provide: 'TASKS_SERVICE',
      useClass: TasksService,
    },
  ],
})
export class TasksModule {}
