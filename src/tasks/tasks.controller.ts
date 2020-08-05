import {
  ApiTags,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiBadRequestResponse
} from '@nestjs/swagger';

import {
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  UsePipes,  
  Controller,
  ValidationPipe,
  ParseIntPipe
} from '@nestjs/common';

import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';
import { TasksService } from './tasks.service';
import { CreateTask } from './dto/create-task.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // @Get()
  // @ApiOkResponse({ description: 'Retrieved all tasks' })
  // getAllTasks(): Task[] {
  //   return this.tasksService.getAllTasks();
  // }

  
  @ApiOkResponse(@Get('/:id'){ description: 'Retrieved a task by id' })
  getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.tasksService.getTaskByid(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  @ApiCreatedResponse({ description: 'Created a task' })
  @ApiBadRequestResponse({ description: 'Bad Request' })  
  createTask(@Body() createTaskDTO: CreateTask): Promise<Task> {
    return this.tasksService.createTask(createTaskDTO);
  }

  // @Patch('/:id/status')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body('status', TaskStatusValidationPipe) status: TaskStatus
  // ): Task {
  //   return this.tasksService.updateTaskStatus(id, status);
  // }

  // @Delete('/:id')
  // @ApiOkResponse({ description: 'Deleted a task' })
  // deleteTask(@Param('id') id: string): void {
  //   this.tasksService.deleteTask(id);
  // }
}
