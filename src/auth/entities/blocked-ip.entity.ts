import { BaseEntity } from "../../common/entities/base.entity";
import { Column, Entity } from "typeorm";
import { BlockedIpReason } from "../enums/blocked-ip-reason.enum";

@Entity('blocked_ips')
export class BlockedIp extends BaseEntity {
  @Column({ name: 'ip_address' })
  ipAddress!: string;

  @Column({
    type: 'enum',
    enum: BlockedIpReason,
    nullable: true,
  })
  reason?: BlockedIpReason;

  @Column({
    name: 'expires_at',
    type: 'timestamp',
    nullable: true,
  })
  expiresAt?: Date;
}
