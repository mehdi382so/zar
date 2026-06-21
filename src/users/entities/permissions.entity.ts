import { BaseEntity } from "../../common/entities/base.entity";
import { Column, Entity, ManyToMany } from "typeorm";
import { Role } from "./role.entity";

@Entity('permissions')
export class Permission extends BaseEntity {
  @Column({
    unique: true,
  })
  key!: string;

  @Column({
    nullable: true,
  })
  description?: string;

  @ManyToMany(
    () => Role,
    (role) => role.permissions,
  )
  roles!: Role[];
}