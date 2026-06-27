import { BaseEntity } from "../../common/entities/base.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { AgentStatus } from "../enums/agent-status.enum";
import { AgentUser } from "./agent-users.entity";

@Entity('agents')
export class Agent extends BaseEntity {
  @Column()
  type!: string;

  @Column()
  name!: string;

  @Column({ name: 'company_name', nullable: true })
  companyName?: string;

  @Column()
  phone!: string;

  @Column({ nullable: true })
  email!: string;

  @Column({ nullable: true})
  address!: string;

  @Column({ type: 'decimal', precision: 10, scale: 7, nullable: true })
  latitude?: number;

  @Column({ type: 'decimal', precision: 10, scale: 7, nullable: true })
  longitude?: number;

  @Column({
    type: 'varchar',
    default: AgentStatus.ACTIVE,
  })
  status!: string;

  @OneToMany(() => AgentUser, (au) => au.agent)
  users!: AgentUser[];
}