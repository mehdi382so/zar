import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductAttribute } from './entities/product-attribute.entity';
import { ProductMedia } from './entities/product-media.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Product,
            ProductAttribute,
            ProductMedia,
        ])
    ]
})
export class ProductsModule {}
