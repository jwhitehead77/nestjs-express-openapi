import { Injectable, NotFoundException } from '@nestjs/common';

import { Task, TaskStatus } from './task.entity';
import { CreateTaskDTO } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private nextId = 1;
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskByid(id: string): Task {
    const task = this.tasks.find(i => i.id === id);

    if (!task) {
      throw new NotFoundException(`Task id "${id}" not found`);
    }

    return task;
  }

  createTask(createTaskDTO: CreateTaskDTO): Task {
    const { title, description } = createTaskDTO;
    
    const task: Task = {
      id: (this.nextId++).toString(),
      title,
      description,
      status: TaskStatus.OPEN,
    }

    this.tasks.push(task);
    return task;
  }

  updateTaskStatus(id: string, status: TaskStatus): Task {
    const task = this.getTaskByid(id);
    task.status = status;
    return task;
  }

  deleteTask(id: string): void {
    const task = this.getTaskByid(id);
    this.tasks = this.tasks.filter(i => i.id !== task.id);
  }
}
