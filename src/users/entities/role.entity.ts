import { BaseEntity } from "../../common/entities/base.entity";
import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { User } from "./user.entity";
import { Permission } from "./permissions.entity";

@Entity('roles')
export class Role extends BaseEntity {
  @Column()
  name!: string;

  @Column({
    unique: true,
  })
  slug!: string;

  @Column({
    nullable: true,
  })
  description?: string;

  @ManyToMany(
    () => User,
    (user) => user.roles,
  )
  users!: User[];

  @ManyToMany(
    () => Permission,
    (permission) => permission.roles,
  )
  @JoinTable({
    name: 'role_permissions',
    joinColumn: {
      name: 'role_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'permission_id',
      referencedColumnName: 'id',
    },
  })
  permissions!: Permission[];
}