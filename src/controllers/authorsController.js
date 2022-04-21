import authors from '../models/Author.js'

class AuthorController {

    static  listBooks = (req, res) => {
        authors.find((err, authors) => {
            res.status(200).json(authors)
        })
    }

    static listBookById = (req, res) => {
        const id = req.params.id

        authors.findById(id, (err, authors) => {
            if(err) {
                res.status(400).send({message: `${err.message} - id do author não localizado.`})
            } else {
                res.status(200).send(authors)
            }
        })
    }

    static createBook = (req, res) => {
        let author = new authors(req.body);

        author.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar author.`})
            } else {
                res.status(201).send(author.toJSON())
            }
        })
    }

    static updateBook = (req, res) => {
        const id = req.params.id;

        authors.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: "author atualizado com sucesso"})
            } else {
                res.status(500).send({message: `${err.message} - falha ao atualizar author.`})
            }
        })
    }

    static deleteBook =(req, res) => {
        const id = req.params.id

        authors.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: "author removido com sucesso"})
            } else {
                res.status(500).send({message: `${err.message} - falha ao excluir author.`})
            }
        })
    }

}

export default AuthorController