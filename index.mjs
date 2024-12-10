import express from 'express'
import { connectDB } from "./config/connectDB.mjs";
import bookRouter from './routes/bookRouter.mjs';

connectDB();
const app = express()
const port = 3000

app.set("view engine","ejs");
app.set("views","./views");
app.use(express.static("public"));

app.use("/book",bookRouter);

app.listen(port, ()=>{
  console.log(`Server starting on ${port}`)
})