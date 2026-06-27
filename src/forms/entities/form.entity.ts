import { BaseEntity } from "../../common/entities/base.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { FormStatus } from "../enums/form-status";
import { FormField } from "./form-field.entity";
import { FormPermission } from "./form-permission.entity";
import { FormSubmission } from "./form-submission.entity";

@Entity('forms')
export class Form extends BaseEntity {
  @Column()
  title!: string;

  @Column({ unique: true })
  slug!: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  description?: string;

  @Column({
    type: 'varchar',
    default: FormStatus.DRAFT,
  })
  status!: string;

  @OneToMany(
    () => FormField,
    (field) => field.form,
  )
  fields!: FormField[];

  @OneToMany(
    () => FormPermission,
    (permission) => permission.form,
  )
  permissions!: FormPermission[];

  @OneToMany(
    () => FormSubmission,
    (submission) => submission.form,
  )
  submissions!: FormSubmission[];
}