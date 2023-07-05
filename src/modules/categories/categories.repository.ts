import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriesEntity } from 'src/entities/categories.entities';
import { BaseRepository } from 'src/interface/BaseRepository';
import { ICategoryRepository } from 'src/interface/ICategoryRepository';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryRepository
  extends BaseRepository<CategoriesEntity, Repository<CategoriesEntity>>
  implements ICategoryRepository
{
  constructor(
    @InjectRepository(CategoriesEntity)
    protected readonly repository: Repository<CategoriesEntity>,
  ) {
    super(repository);
  }
}
