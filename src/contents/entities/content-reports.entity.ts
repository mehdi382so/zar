import { BaseEntity } from "../../common/entities/base.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { ReportStatus } from "../enums/report-status.enum";
import { Content } from "./content.entity";
import { User } from "../../users/entities/user.entity";

@Entity('content_reports')
export class ContentReport extends BaseEntity {
  @Column({ name: 'content_id' })
  contentId!: number;

  @Column({ name: 'user_id' })
  userId!: number;

  @Column()
  subject!: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  description?: string;

  @Column({
    type: 'enum',
    enum: ReportStatus,
    default: ReportStatus.PENDING,
  })
  status!: ReportStatus;

  @ManyToOne(() => Content)
  @JoinColumn({ name: 'content_id' })
  content!: Content;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user!: User;
}