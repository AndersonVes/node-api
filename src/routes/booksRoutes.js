import express from "express";
import BookController from "../controllers/booksController.js";

const router = express.Router();

router
    .get("/books", BookController.listBooks)
    .get("/books/busca", BookController.listBookByPublisher)
    .get("/books/:id", BookController.listBookById)
    .post("/books", BookController.createBook)
    .put("/books/:id", BookController.updateBook)
    .delete("/books/:id", BookController.deleteBook)

export default router