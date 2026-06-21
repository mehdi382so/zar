import { BaseEntity } from "../../common/entities/base.entity";
import { Column, Entity } from "typeorm";
import { OtpPurpose } from "../enums/otp-purpose.enum";

// for Password Recovery , Email Verification , ...
@Entity('otp_codes')
export class OtpCode extends BaseEntity {
  @Column()
  email!: string;

  @Column({ name: 'code_hash' })
  codeHash!: string;

  @Column({
    type: 'enum',
    enum: OtpPurpose,
  })
  purpose!: OtpPurpose;

  @Column({
    name: 'expires_at',
    type: 'timestamp',
  })
  expiresAt!: Date;

  @Column({
    name: 'used_at',
    type: 'timestamp',
    nullable: true,
  })
  usedAt?: Date;

  @Column({
    name: 'attempts_count',
    default: 0,
  })
  attemptsCount!: number;

  @Column({
    name: 'request_ip',
    nullable: true,
  })
  requestIp?: string;
}