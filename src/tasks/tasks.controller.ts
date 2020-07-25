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
  ValidationPipe
} from '@nestjs/common';

import { Task, TaskStatus } from './task.entity';
import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dto/create-task.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  @ApiOkResponse({ description: 'Retrieved all tasks' })
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Get('/:id')
  @ApiOkResponse({ description: 'Retrieved a task by id' })
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskByid(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  @ApiCreatedResponse({ description: 'Created a task' })
  @ApiBadRequestResponse({ description: 'Bad Request' })  
  createTask(@Body() createTaskDTO: CreateTaskDTO): Task {
    return this.tasksService.createTask(createTaskDTO);
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status', TaskStatusValidationPipe) status: TaskStatus
  ): Task {
    return this.tasksService.updateTaskStatus(id, status);
  }

  @Delete('/:id')
  @ApiOkResponse({ description: 'Deleted a task' })
  deleteTask(@Param('id') id: string): void {
    this.tasksService.deleteTask(id);
  }  
}
