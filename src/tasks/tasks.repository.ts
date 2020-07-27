import { Repository, EntityRepository } from "typeorm";

import { Task } from "./task.entity";
import { TaskStatus } from "./task-status.enum";
import { CreateTask } from "./dto/create-task.dto";

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {
  
  // async createTask(createTaskDTO: CreateTask): Promise<Task> {
  //   const { title, description } = createTaskDTO;
    
  //   const task = new Task();
  //   task.title = title;
  //   task.description = description;
  //   task.status = TaskStatus.OPEN;
  //   await task.save();

  //   return task;
  // }
}