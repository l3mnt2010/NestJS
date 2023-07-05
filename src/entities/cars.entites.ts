import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('cars')
export class CarEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productName: string;

  @Column()
  categories_id: number;

  @Column()
  price: number;
}
