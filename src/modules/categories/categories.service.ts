import { Inject, Injectable } from '@nestjs/common';
import { ICategoryRepository } from 'src/interface/ICategoryRepository';
import { Categories } from 'src/models/categories.model';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('ICategoryRepository')
    private readonly categoryRepository: ICategoryRepository,
  ) {}
  async getCategories(): Promise<Categories[]> {
    return await this.categoryRepository.findAll();
  }
}
