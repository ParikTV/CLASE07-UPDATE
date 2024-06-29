import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { IsNotEmpty } from "class-validator";
import { Productos } from "./Productos"; // Asumiendo que tienes una entidad Categoria definida

@Entity()
export class Proveedor {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ length: 50, nullable: false })
    @IsNotEmpty({ message: 'Debe indicar el nombre del producto.' })
    nombre: string;
    
    @Column({ length: 50, nullable: false })
    @IsNotEmpty({ message: 'Debe indicar el apellido.' })
    apellidos: string;
    
    @Column({ length: 50, nullable: false })
    @IsNotEmpty({ message: 'Debe indicar la dirección.' })
    direccion: string;
    
    @Column({ length: 50, nullable: false })
    @IsNotEmpty({ message: 'Debe indicar la provincia.' })
    provincia: string;
    
    @Column({ length: 50, nullable: false })
    @IsNotEmpty({ message: 'Debe indicar el teléfono.' })
    telefono: string;
    
    @OneToMany(()=>Productos, (productos)=> productos.Proveedor)   
    productos: Productos;
}
