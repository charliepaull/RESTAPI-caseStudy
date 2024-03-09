import { config } from "dotenv";
// crud logic function from other file
import { executeCRUDLogic } from "./crudLogic.js";
config();
console.log(process.env.DB_URI)
// invoke executeCRUDLogic
await executeCRUDLogic();