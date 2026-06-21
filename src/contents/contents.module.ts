import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Content } from './entities/content.entity';
import { ContentReport } from './entities/content-reports.entity';
import { Category } from './entities/category.entity';
import { Comment } from './entities/comment.entity';
import { Rating } from './entities/rating.entity';
import { Tag } from './entities/tag.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Content,
            ContentReport,
            Category,
            Comment,
            Rating,
            Tag
        ])
    ]
})
export class ContentsModule {}
