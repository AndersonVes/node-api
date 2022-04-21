import books from '../models/Book.js'

class BookController {

    static listBooks = (req, res) => {
        books.find()
            .populate('author')
            .exec((err, books) => {
                res.status(200).json(books)
            })
    }

    static listBookById = (req, res) => {
        const id = req.params.id

        books.findById(id)
            .populate('author', 'name')
            .exec((err, books) => {
                if (err) {
                    res.status(400).send({ message: `${err.message} - id do book não localizado.` })
                } else {
                    res.status(200).send(books)
                }
            })
    }

    static createBook = (req, res) => {
        let book = new books(req.body);

        book.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar book.` })
            } else {
                res.status(201).send(book.toJSON())
            }
        })
    }

    static updateBook = (req, res) => {
        const id = req.params.id;

        books.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "book atualizado com sucesso" })
            } else {
                res.status(500).send({ message: `${err.message} - falha ao atualizar book.` })
            }
        })
    }

    static deleteBook = (req, res) => {
        const id = req.params.id

        books.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: "book removido com sucesso" })
            } else {
                res.status(500).send({ message: `${err.message} - falha ao excluir book.` })
            }
        })
    }

    static listBookByPublisher = (req, res) => {
        const publisher = req.query.publisher

        books.find({ 'publisher': publisher }, {}, (err, books) => {
            res.status(200).send(books);

        })
    }

}

export default BookController