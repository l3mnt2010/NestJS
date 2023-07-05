import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('categories')
export class CategoriesEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  categoryName: string;

  @Column()
  description: string;
}
