import { BaseEntity } from "../../common/entities/base.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { Content } from "./content.entity";

@Entity('categories')
export class Category extends BaseEntity {
  @Column()
  title!: string;

  @Column({ unique: true })
  slug!: string;

  @Column({
    name: 'parent_id',
    nullable: true,
  })
  parentId?: number;

  @ManyToOne(
    () => Category,
    (category) => category.children,
    {
      onDelete: 'NO ACTION',
    },
  )
  @JoinColumn({ name: 'parent_id' })
  parent?: Category;

  @OneToMany(
    () => Category,
    (category) => category.parent,
  )
  children!: Category[];

  @ManyToMany(
    () => Content,
    (content) => content.categories,
  )
  contents!: Content[];
}