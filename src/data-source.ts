import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Productos } from "./entity/Productos"
import { Categoria } from "./entity/Categoria"
import { Factura } from "./entity/Factura"
import { Proveedor } from "./entity/Proveedor"
import { Vendedor } from "./entity/Vendedor"
import { DetalleFactura } from "./entity/DetalleFactura"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Utn123**",
    database: "ejemplodb",
    synchronize: true,
    logging: false,
    entities: [User, Productos, Categoria,Factura,Proveedor,Vendedor,DetalleFactura],
    migrations: [],
    subscribers: [],
})
