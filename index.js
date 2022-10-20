import express, { application } from "express";
import { addNewFurniture } from "./src/furniture.js";

const app = express();
const PORT = 3030;
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("63515b9a5491753c08398111");
})

app.post("/furniture", addNewFurniture);

app.listen(PORT, ()=> console.log(`Listening on http://localhost:${PORT}...`))