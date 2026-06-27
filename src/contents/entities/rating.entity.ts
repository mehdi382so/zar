import { BaseEntity } from "../../common/entities/base.entity";
import { Check, Column, Entity, JoinColumn, ManyToOne, Unique } from "typeorm";
import { Content } from "./content.entity";
import { User } from "../../users/entities/user.entity";

@Entity('ratings')
@Unique(['contentId', 'userId'])
export class Rating extends BaseEntity {
  @Column({ name: 'content_id' })
  contentId!: number;

  @Column({ name: 'user_id' })
  userId!: number;

  @Column({ type: 'smallint' })
  @Check(`value BETWEEN 1 AND 5`)
  value!: number;

  @ManyToOne(() => Content)
  @JoinColumn({ name: 'content_id' })
  content!: Content;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user!: User;
}