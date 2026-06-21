import { BaseEntity } from "../../common/entities/base.entity";
import { User } from "../../users/entities/user.entity";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";

@Entity('security_logs')
@Index(['userId'])
export class SecurityLog extends BaseEntity {
  @Column({
    name: 'user_id',
    nullable: true,
  })
  userId?: number;

  @Column()
  event!: string;

  @Column({
    name: 'ip_address',
  })
  ipAddress!: string;

  @Column({
    name: 'user_agent',
  })
  userAgent!: string;

  @ManyToOne(() => User, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'user_id' })
  user?: User;
}