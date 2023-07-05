import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';
import { CategoriesEntity } from 'src/entities/categories.entities';
import { CategoryController } from './categories.controller';
import { CategoryService } from './categories.service';
import { CategoryRepository } from './categories.repository';

@Module({
  imports: [SequelizeModule.forFeature([CategoriesEntity])],
  controllers: [CategoryController],
  providers: [
    CategoryService,
    {
      useClass: CategoryRepository,
      provide: 'ICategoryRepository',
    },
  ],
})
export class CategoryModule {}
