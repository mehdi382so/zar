import { BaseEntity } from "../../common/entities/base.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { People } from "./people.entity";

// فیلد های دارای مقدار متنی برای معرفی افراد
@Entity('people_sections')
export class PeopleSection extends BaseEntity {
  @Column({ name: 'person_id' })
  personId!: number;

  @Column()
  title!: string;

  @Column({ type: 'text' })
  content!: string;

  @Column({
    name: 'order_index',
    default: 0,
  })
  orderIndex!: number;

  @ManyToOne(() => People, (p) => p.sections, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'person_id' })
  person!: People;
}