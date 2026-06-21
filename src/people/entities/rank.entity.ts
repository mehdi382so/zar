import { BaseEntity } from "../../common/entities/base.entity";
import { Column, Entity } from "typeorm";

@Entity('ranks')
export class Rank extends BaseEntity {
  @Column()
  title!: string;

  @Column()
  level!: number;
}