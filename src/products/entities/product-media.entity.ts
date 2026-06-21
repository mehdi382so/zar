import { BaseEntity } from "../../common/entities/base.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Product } from "./product.entity";
import { Media } from "../../media/entities/media.entity";

@Entity('product_media')
export class ProductMedia extends BaseEntity {
  @Column({ name: 'product_id' })
  productId!: number;

  @Column({ name: 'media_id' })
  mediaId!: number;

  @Column({
    name: 'is_main',
    default: false,
  })
  isMain!: boolean;

  @Column({
    name: 'sort_order',
    default: 0,
  })
  sortOrder!: number;

  @ManyToOne(() => Product, (p) => p.media, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'product_id' })
  product!: Product;

  @ManyToOne(() => Media, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'media_id' })
  media!: Media;
}