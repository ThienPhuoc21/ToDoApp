import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm"
@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>) {

  }
  async create(createTaskDto: CreateTaskDto) {
    const task = this.taskRepository.create(createTaskDto)
    return await this.taskRepository.save(task);
  }

  async findAll() {
    return await this.taskRepository.find();
  }

  async findOne(id: number) {
    return await this.taskRepository.findOne({
      where: {
        id
      }
    });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const task = await this.findOne(id);
    if (!task) {
      throw new NotFoundException()
    }
    Object.assign(task, updateTaskDto)
    return await this.taskRepository.save(task)
  }

  async remove(id: number) {
    const task = await this.findOne(id);
    if (!task) {
      throw new NotFoundException()
    }
    return await this.taskRepository.remove(task)
  }
}
