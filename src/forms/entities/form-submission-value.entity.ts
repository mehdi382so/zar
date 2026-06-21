import { BaseEntity } from "../../common/entities/base.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { FormSubmission } from "./form-submission.entity";

@Entity('form_submission_values')
export class FormSubmissionValue extends BaseEntity {
  @Column({ name: 'submission_id' })
  submissionId!: number;

  @Column({ name: 'field_key' })
  fieldKey!: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  value?: string;

  @ManyToOne(
    () => FormSubmission,
    (submission) => submission.values,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'submission_id' })
  submission!: FormSubmission;
}