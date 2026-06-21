import { BaseEntity } from "../../common/entities/base.entity";
import { Column, Entity } from "typeorm";

@Entity('system_logs')
export class SystemLog extends BaseEntity {
  @Column()
  level!: string;

  @Column()
  message!: string;

  @Column({
    type: 'jsonb',
    nullable: true,
  })
  context?: Record<string, any>;
}