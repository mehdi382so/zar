import { BaseEntity } from "../../common/entities/base.entity";
import { Media } from "../../media/entities/media.entity";
import { User } from "../../users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Rank } from "./rank.entity";
import { PeopleSection } from "./people-section.entity";

// بخش معرفی افراد
@Entity('people')
export class People extends BaseEntity {
  @Column({ name: 'user_id', nullable: true })
  userId?: number;

  @Column({ name: 'picture_id', nullable: true })
  pictureId?: number;

  @Column({ name: 'full_name', nullable: true })
  fullName?: string;

  @Column({ name: 'rank_id', nullable: true })
  rankId?: number;

  // ===== Relations =====

  @ManyToOne(() => User, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @ManyToOne(() => Media, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'picture_id' })
  picture?: Media;

  @ManyToOne(() => Rank, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'rank_id' })
  rank?: Rank;

  @OneToMany(() => PeopleSection, (s) => s.person)
  sections!: PeopleSection[];
}