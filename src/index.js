// imports
import { config } from "dotenv";
// crud logic function from other file
import { executeCRUDLogic } from "./crudLogic.js";
import express from "express";
import bodyParser from "body-parser";

// dotenv config
config();
// invoke executeCRUDLogic
await executeCRUDLogic();

const app = express();
app.use(express.json());
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})