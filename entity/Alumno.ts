import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Alumno {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nombre!: string;

    @Column()
    apellido!: string;

    @Column()
    direccion!: string;

    @Column()
    poblacion!: string;

    @Column()
    codigopostal!: number;

    @Column()
    curso!: string;
}
