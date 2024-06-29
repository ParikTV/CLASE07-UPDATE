import { IsNotEmpty, IsNumber, IsPositive, MaxLength, isPositive } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vendedor{

    @PrimaryGeneratedColumn()
    @IsNotEmpty({message:'Debe indicar el ID.'})  
    id:number;
    @Column({length:50,nullable:false})
    @IsNotEmpty({message:'Debe indicar el nombre.'})
    nombre: string;
    @Column({length:50,nullable:false})
    @IsNotEmpty({message:'Debe indicar el apellido.'})
    apellidos: string;
    @Column({length:50,nullable:false})
    @IsNotEmpty({message:'Debe indicar el direccion.'})
    Direccion: string;
    @IsNotEmpty({message:'Debe indicar el telefono.'})
    Telefono: number;
    @IsNotEmpty({message:'Debe indicar el telefono.'})
    Celular: number;

    
}
