import { Entity, Column, PrimaryGeneratedColumn, Repository } from 'typeorm';

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    detail: string;

    @Column({ nullable: false })
    time: string;

    @Column({ default: false })
    isCompleted: boolean;
}