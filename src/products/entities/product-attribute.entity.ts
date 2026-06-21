import { BaseEntity } from "../../common/entities/base.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Product } from "./product.entity";

// ویژگی های منحصر بفرد محصول
@Entity('product_attributes')
export class ProductAttribute extends BaseEntity {
  @Column({ name: 'product_id' })
  productId!: number;

  @Column()
  key!: string;

  @Column()
  value!: string;

  @ManyToOne(() => Product, (p) => p.attributes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'product_id' })
  product!: Product;
}