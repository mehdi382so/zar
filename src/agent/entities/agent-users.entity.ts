import { BaseEntity } from "../../common/entities/base.entity";
import { Column, Entity, JoinColumn, ManyToOne, Unique } from "typeorm";
import { AgentUserRole } from "../enums/agent-user-role.enum";
import { User } from "../../users/entities/user.entity";
import { Agent } from "./agent.entity";

@Entity('agent_users')
@Unique(['userId', 'agentId'])
export class AgentUser extends BaseEntity {
  @Column({ name: 'user_id' })
  userId!: number;

  @Column({ name: 'agent_id' })
  agentId!: number;

  @Column({
    name: 'role_in_agent',
    type: 'varchar',
    default: AgentUserRole.STAFF,
  })
  roleInAgent!: string;

  @ManyToOne(() => User, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @ManyToOne(() => Agent, (a) => a.users, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'agent_id' })
  agent!: Agent;
}