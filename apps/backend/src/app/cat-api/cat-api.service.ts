import { Injectable } from '@nestjs/common';
import { CreateCatApiDto } from './dto/create-cat-api.dto';
import { UpdateCatApiDto } from './dto/update-cat-api.dto';

@Injectable()
export class CatApiService {
  create(createCatApiDto: CreateCatApiDto) {
    return 'This action adds a new catApi';
  }

  findAll() {
    return `This action returns all catApi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} catApi`;
  }

  update(id: number, updateCatApiDto: UpdateCatApiDto) {
    return `This action updates a #${id} catApi`;
  }

  remove(id: number) {
    return `This action removes a #${id} catApi`;
  }
}
