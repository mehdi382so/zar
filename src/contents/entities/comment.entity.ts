import { BaseEntity } from "../../common/entities/base.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { CommentStatus } from "../enums/comment-status.enum";
import { Content } from "./content.entity";
import { User } from "../../users/entities/user.entity";

@Entity('comments')
export class Comment extends BaseEntity {
  @Column({ name: 'content_id' })
  contentId!: number;

  @Column({
    name: 'parent_id',
    nullable: true,
  })
  parentId?: number;

  @Column({ name: 'user_id' })
  userId!: number;

  @Column('text')
  body!: string;

  @Column({
    type: 'enum',
    enum: CommentStatus,
    default: CommentStatus.PENDING,
  })
  status!: CommentStatus;

  @ManyToOne(() => Content, (content) => content.comments)
  @JoinColumn({ name: 'content_id' })
  content!: Content;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @ManyToOne(
    () => Comment,
    (comment) => comment.children,
  )
  @JoinColumn({ name: 'parent_id' })
  parent?: Comment;

  @OneToMany(
    () => Comment,
    (comment) => comment.parent,
  )
  children!: Comment[];
}