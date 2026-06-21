import { BaseEntity } from "../../common/entities/base.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { ProductStatus } from "../enums/product-status.enum";
import { ProductAttribute } from "./product-attribute.entity";
import { ProductMedia } from "./product-media.entity";

@Entity('products')
export class Product extends BaseEntity {
  @Column()
  code!: string;

  @Column()
  title!: string;

  @Column({ unique: true })
  slug!: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({
    type: 'enum',
    enum: ProductStatus,
    default: ProductStatus.DRAFT,
  })
  status!: ProductStatus;

  @Column({
    name: 'views_count',
    default: 0,
  })
  viewsCount!: number;

  @OneToMany(() => ProductAttribute, (attr) => attr.product)
  attributes!: ProductAttribute[];

  @OneToMany(() => ProductMedia, (media) => media.product)
  media!: ProductMedia[];
}