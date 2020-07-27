import { TaskStatus } from '../task-status.enum';

export class GetTasksFilter {
  status: TaskStatus;
  search: string;
}