import { BaseEntity } from "../../common/entities/base.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { FormSubmissionStatus } from "../enums/form-sub-status.enum";
import { Form } from "./form.entity";
import { User } from "../../users/entities/user.entity";
import { FormSubmissionValue } from "./form-submission-value.entity";

@Entity('form_submissions')
export class FormSubmission extends BaseEntity {
  @Column({ name: 'form_id' })
  formId!: number;

  @Column({
    name: 'user_id',
    nullable: true,
  })
  userId?: number;

  @Column({
    type: 'enum',
    enum: FormSubmissionStatus,
    default: FormSubmissionStatus.PENDING,
  })
  status!: FormSubmissionStatus;

  @ManyToOne(
    () => Form,
    (form) => form.submissions,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'form_id' })
  form!: Form;

  @ManyToOne(() => User, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'user_id' })
  user?: User;

  @OneToMany(
    () => FormSubmissionValue,
    (value) => value.submission,
  )
  values!: FormSubmissionValue[];
}