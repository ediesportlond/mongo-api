import express, { application } from "express";
import { addNewFurniture, getAllFurniture, findFurniture } from "./src/furniture.js";

const app = express();
const PORT = 3030;
app.use(express.json());

app.get("/furniture", getAllFurniture);

app.post("/furniture", addNewFurniture);

app.get("/furniture/search/:key/:value", findFurniture);

app.listen(PORT, ()=> console.log(`Listening on http://localhost:${PORT}...`))