import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuditLog } from './entities/audit-logs.entity';
import { SecurityLog } from './entities/security-logs.entity';
import { SystemLog } from './entities/system-logs.entity';

@Module({
    imports: [TypeOrmModule.forFeature([AuditLog, SecurityLog, SystemLog])]
})
export class LogModule {}
