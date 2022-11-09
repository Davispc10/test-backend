import { Post, Controller } from '@nestjs/common';
import { SeederService } from './seeds.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Seed')
@Controller('seed')
export class SeederController {
  constructor(private readonly seederService: SeederService) {}

  @Post()
  async populateDatabase() {
    return this.seederService.populateDatabase();
  }
}
