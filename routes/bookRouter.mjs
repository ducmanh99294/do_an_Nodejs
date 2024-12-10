import express from "express"
import bookController from "../controllers/bookController.mjs";
const bookRouter = express.Router();
bookRouter.get("/", bookController.index)

export default bookRouter