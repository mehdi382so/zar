import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { People } from './entities/people.entity';
import { PeopleSection } from './entities/people-section.entity';
import { Rank } from './entities/rank.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            People,
            PeopleSection,
            Rank
        ])
    ]
})
export class PeopleModule {}
