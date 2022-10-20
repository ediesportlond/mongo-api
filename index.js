import express, { application } from "express";
const app = express();
const PORT = 3030;
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("API is live");
})

app.listen(PORT, ()=> console.log(`Listening on http://localhost:${PORT}...`))