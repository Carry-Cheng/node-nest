import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Music {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 255 })
  name: string
}