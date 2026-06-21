import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Media } from './entities/media.entity';
import { MediaRelation } from './entities/media-relations';

@Module({
  imports: [TypeOrmModule.forFeature([Media, MediaRelation])],
})
export class MediaModule {}
