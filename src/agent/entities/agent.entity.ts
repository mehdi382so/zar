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

  @Column({ type: 'decimal', nullable: true })
  latitude?: number;

  @Column({ type: 'decimal', nullable: true })
  longitude?: number;

  @Column({
    type: 'enum',
    enum: AgentStatus,
    default: AgentStatus.ACTIVE,
  })
  status!: AgentStatus;

  @OneToMany(() => AgentUser, (au) => au.agent)
  users!: AgentUser[];
}