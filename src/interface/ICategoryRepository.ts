import { Categories } from 'src/models/categories.model';
import { AbstractPromise } from './AbstractRepository';

export interface ICategoryRepository extends AbstractPromise<Categories> {}
