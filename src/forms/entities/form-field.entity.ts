import { BaseEntity } from "../../common/entities/base.entity";
import { Column, Entity, JoinColumn, ManyToOne, Unique } from "typeorm";
import { FormFieldType } from "../enums/form-field-type.enum";
import { Form } from "./form.entity";

@Entity('form_fields')
@Unique(['formId', 'key'])
export class FormField extends BaseEntity {
  @Column({ name: 'form_id' })
  formId!: number;

  @Column()
  label!: string;

  @Column()
  key!: string;

  @Column({
    type: 'enum',
    enum: FormFieldType,
  })
  type!: FormFieldType;

  @Column({
    name: 'is_required',
    default: false,
  })
  isRequired!: boolean;

  @Column({
    type: 'text',
    nullable: true,
  })
  description?: string;

  @Column({
    name: 'validation_rules',
    type: 'jsonb',
    nullable: true,
  })
  validationRules?: Record<string, any>;

  @Column({
    type: 'jsonb',
    nullable: true,
  })
  options?: Record<string, any>;

  @Column({
    name: 'order_index',
    default: 0,
  })
  orderIndex!: number;

  @ManyToOne(
    () => Form,
    (form) => form.fields,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'form_id' })
  form!: Form;
}