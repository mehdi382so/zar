import { BaseEntity } from "../../common/entities/base.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { ContentStatus } from "../enums/content-status.enum";
import { Media } from "../../media/entities/media.entity";
import { User } from "../../users/entities/user.entity";
import { Category } from "./category.entity";
import { Tag } from "./tag.entity";
import { Comment } from "./comment.entity";
import { Rating } from "./rating.entity";
import { ContentReport } from "./content-reports.entity";

@Entity('contents')
export class Content extends BaseEntity {
  @Column()
  type!: string; // News , Article , Wiki

  @Column()
  title!: string;

  @Column({ unique: true })
  slug!: string;

  @Column({
    nullable: true,
  })
  summary?: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  body?: string;

  @Column({
    name: 'cover_id',
    nullable: true,
  })
  coverId?: number;

  @Column({
    name: 'author_id',
  })
  authorId!: number;

  @Column({
    type: 'enum',
    enum: ContentStatus,
    default: ContentStatus.DRAFT,
  })
  status!: ContentStatus;

  @Column({
    name: 'is_featured',
    default: false,
  })
  isFeatured!: boolean; // To show above all

  @Column({
    name: 'published_at',
    type: 'timestamp',
    nullable: true,
  })
  publishedAt?: Date;

  @Column({
    name: 'views_count',
    default: 0,
  })
  viewsCount!: number;

  // ===== Relations ====

  @ManyToOne(() => Media, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'cover_id' })
  cover?: Media;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'author_id' })
  author!: User;

  @ManyToMany(() => Category)
  @JoinTable({
    name: 'content_categories',
    joinColumn: {
      name: 'content_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'category_id',
      referencedColumnName: 'id',
    },
  })
  categories!: Category[];

  @ManyToMany(() => Tag)
  @JoinTable({
    name: 'content_tags',
    joinColumn: {
      name: 'content_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'tag_id',
      referencedColumnName: 'id',
    },
  })
  tags!: Tag[];

  @OneToMany(() => Comment, (comment) => comment.content)
  comments!: Comment[];

  @OneToMany(() => Rating, (rating) => rating.content)
  ratings!: Rating[];

  @OneToMany(() => ContentReport, (report) => report.content)
  reports!: ContentReport[];
}