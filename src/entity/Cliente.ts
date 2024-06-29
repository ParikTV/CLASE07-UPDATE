
import { IsNotEmpty, IsNumber, IsPositive, MaxLength, isPositive } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cliente{
 
    @PrimaryGeneratedColumn()
    @Column({length:50,nullable:false})
    @IsNotEmpty({message:'Debe indicar el ID.'})  
    id:number;
    @Column({length:50,nullable:false})
    @IsNotEmpty({message:'Debe indicar el nombre del producto.'})
    nombre: string;
    @Column({length:50,nullable:false})
    @IsNotEmpty({message:'Debe indicar el apellido.'}) 
    apellidos: string;
    @Column({length:50,nullable:false})
    @IsNotEmpty({message:'Debe indicar la direccion.'})  
    direccion:string;
    @IsNotEmpty({message:'Debe indicar el telefono.'})  
    Telefono:string;
   
    
    





    
}