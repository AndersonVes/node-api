import express from "express";
import AuthorController from "../controllers/authorsController.js";

const router = express.Router();

router
    .get("/authors", AuthorController.listBooks)
    .get("/authors/:id", AuthorController.listBookById)
    .post("/authors", AuthorController.createBook)
    .put("/authors/:id", AuthorController.updateBook)
    .delete("/authors/:id", AuthorController.deleteBook)

export default router