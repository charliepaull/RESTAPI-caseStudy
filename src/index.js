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

// test endpoint
app.get("/allBooks", async (req, res) => {
    try {
        let allBooks = await executeCRUDLogic();
        res.json(allBooks);
    } catch (error) {
        res.json({ message: error.message });
    }
})