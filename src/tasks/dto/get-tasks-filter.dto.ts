import { TaskStatus } from './../task.entity';

export class GetTasksFilterDTO {
  status: TaskStatus;
  search: string;
}