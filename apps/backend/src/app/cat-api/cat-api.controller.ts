import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CatApiService } from './cat-api.service';
import { CreateCatApiDto } from './dto/create-cat-api.dto';
import { UpdateCatApiDto } from './dto/update-cat-api.dto';

@Controller('cat-api')
export class CatApiController {
  constructor(private readonly catApiService: CatApiService) {}

  @Post()
  create(@Body() createCatApiDto: CreateCatApiDto) {
    return this.catApiService.create(createCatApiDto);
  }

  @Get()
  findAll() {
    return this.catApiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catApiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatApiDto: UpdateCatApiDto) {
    return this.catApiService.update(+id, updateCatApiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catApiService.remove(+id);
  }
}
