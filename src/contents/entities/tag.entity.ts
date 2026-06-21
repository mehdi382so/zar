import { BaseEntity } from "../../common/entities/base.entity";
import { Column, Entity, ManyToMany } from "typeorm";
import { Content } from "./content.entity";

@Entity('tags')
export class Tag extends BaseEntity {
  @Column()
  title!: string;

  @Column({
    unique: true,
  })
  slug!: string;

  @ManyToMany(
    () => Content,
    (content) => content.tags,
  )
  contents!: Content[];
}