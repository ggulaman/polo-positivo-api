import { Module } from '@nestjs/common';
import { ReeController } from './ree.controller';
import { ReeService } from './ree.service';

@Module({
  controllers: [ReeController],
  providers: [ReeService]
})
export class ReeModule {}
