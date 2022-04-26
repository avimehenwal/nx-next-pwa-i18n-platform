import { PartialType } from '@nestjs/swagger';
import { CreateCatApiDto } from './create-cat-api.dto';

export class UpdateCatApiDto extends PartialType(CreateCatApiDto) {}
