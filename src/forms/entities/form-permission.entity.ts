import { BaseEntity } from "../../common/entities/base.entity";
import { Column, Entity, JoinColumn, ManyToOne, Unique } from "typeorm";
import { Form } from "./form.entity";
import { Role } from "../../users/entities/role.entity";

@Entity('form_permissions')
@Unique(['formId', 'roleId'])
export class FormPermission extends BaseEntity {
  @Column({ name: 'form_id' })
  formId!: number;

  @Column({ name: 'role_id' })
  roleId!: number;

  @Column({
    name: 'can_view',
    default: true,
  })
  canView!: boolean;

  @Column({
    name: 'can_submit',
    default: true,
  })
  canSubmit!: boolean;

  @ManyToOne(
    () => Form,
    (form) => form.permissions,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'form_id' })
  form!: Form;

  @ManyToOne(
    () => Role,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'role_id' })
  role!: Role;
}