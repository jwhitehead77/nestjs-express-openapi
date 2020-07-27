import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';
import { CreateTask } from './dto/create-task.dto';
// import { TasksRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  // constructor(
  //   @InjectRepository(TasksRepository)
  //   private tasksRepository: TasksRepository
  // ) {}

  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }

  // async getTaskByid(id: number): Promise<Task> {
  //   const task = await this.tasksRepository.findOne(id);

  //   if (!task) {
  //     throw new NotFoundException(`Task id "${id}" not found`);
  //   }

  //   return task;
  // }

  // async createTask(createTaskDTO: CreateTask): Promise<Task> {
  //   return await this.tasksRepository.createTask(createTaskDTO);
  // }

  // updateTaskStatus(id: string, status: TaskStatus): Task {
  //   const task = this.getTaskByid(id);
  //   task.status = status;
  //   return task;
  // }

  // deleteTask(id: string): void {
  //   const task = this.getTaskByid(id);
  //   this.tasks = this.tasks.filter(i => i.id !== task.id);
  // }
}
