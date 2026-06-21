import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlockedIp } from './entities/blocked-ip.entity';
import { OtpCode } from './entities/otp-codes.entity';

@Module({
    imports: [TypeOrmModule.forFeature([BlockedIp, OtpCode])]
})
export class AuthModule {}
