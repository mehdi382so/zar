import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agent } from './entities/agent.entity';
import { AgentUser } from './entities/agent-users.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Agent,
            AgentUser
        ])
    ]
})
export class AgentModule {}
