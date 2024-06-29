import {Router} from "express"
import productos from "./productos";
import categoria from "./categorias";


const routes= Router();

routes.use("/Productos", productos );
routes.use("/Categorias", categoria );


export default routes;