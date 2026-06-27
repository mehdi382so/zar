import { User } from "../../users/entities/user.entity";
import { BaseEntity } from "../../common/entities/base.entity";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";

@Entity('audit_logs')
@Index(['userId'])
@Index(['entityType', 'entityId'])
@Index(['action'])
export class AuditLog extends BaseEntity {
  @Column({
    name: 'user_id',
    nullable: true,
  })
  userId?: number;

  @Column()
  action!: string;

  @Column({ name: 'entity_type' })
  entityType!: string;

  @Column({ name: 'entity_id' })
  entityId!: number;

  @Column({
    type: 'nvarchar',
    length: 'max',
    nullable: true,
    transformer: {
      to: (value: any) => value ? JSON.stringify(value) : null,
      from: (value: string) => value ? JSON.parse(value) : null,
    },
  })
  changes?: Record<string, any>;

  @Column({
    name: 'ip_address',
    nullable: true,
  })
  ipAddress?: string;

  @Column({
    name: 'user_agent',
    nullable: true,
  })
  userAgent?: string;

  @ManyToOne(() => User, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'user_id' })
  user?: User;
}