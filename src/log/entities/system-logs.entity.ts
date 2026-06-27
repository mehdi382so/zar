import { BaseEntity } from "../../common/entities/base.entity";
import { Column, Entity } from "typeorm";

@Entity('system_logs')
export class SystemLog extends BaseEntity {
  @Column()
  level!: string;

  @Column()
  message!: string;

  @Column({
    type: 'nvarchar',
    length: 'max',
    nullable: true,
    transformer: {
      to: (value: any) => value ? JSON.stringify(value) : null,
      from: (value: string) => value ? JSON.parse(value) : null,
    },
  })
  context?: Record<string, any>;
}