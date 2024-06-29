
import { IsNotEmpty, IsNumber, IsPositive, MaxLength, isPositive } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Factura{
 
    @PrimaryGeneratedColumn()
    @IsNotEmpty({message:'Debe indicar el ID.'})  
    id:number;
   





    
}