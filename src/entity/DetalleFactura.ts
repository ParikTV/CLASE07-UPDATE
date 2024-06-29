
import { IsNotEmpty, IsNumber, IsPositive, MaxLength, isPositive } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DetalleFactura{
 
    @PrimaryGeneratedColumn()
    @IsNotEmpty({message:'Debe indicar el ID.'})  
    id:number;
   





    
}