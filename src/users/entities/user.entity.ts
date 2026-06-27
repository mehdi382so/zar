import { BaseEntity } from "../../common/entities/base.entity";
import { Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { UserStatus } from "../enums/user-status.enum";
import { Media } from "../../media/entities/media.entity";
import { Role } from "./role.entity";

@Entity('users')
// Set verified Emails unique
@Index('users_verified_email_unique', ['email'], {
  unique: true,
})
export class User extends BaseEntity {
  @Column({
    name: 'profile_image_id',
    nullable: true,
  })
  profileImageId?: number;

  @Column({
    name: 'full_name',
    nullable: true,
  })
  fullName?: string;

  @Column({ unique: true })
  username!: string;

  @Column({ name: 'password_hash' })
  passwordHash!: string;

  @Column({ nullable: true })
  email!: string;
  
  @Column({
    name: 'email_verified_at',
    type: 'datetime2',
    nullable: true,
  })
  emailVerifiedAt?: Date;
  
  @Column({ nullable: true })
  phone!: string;

  @Column({
    type: 'varchar',
    default: UserStatus.ACTIVE,
  })
  status!: string;

  @Column({
    name: 'last_login_at',
    type: 'datetime2',
    nullable: true,
  })
  lastLoginAt?: Date;

  @ManyToOne(() => Media, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'profile_image_id' })
  profileImage?: Media;

  @ManyToMany(
    () => Role,
    (role) => role.users,
  )
  @JoinTable({
    name: 'user_roles',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'role_id',
      referencedColumnName: 'id',
    },
  })
  roles!: Role[];
}