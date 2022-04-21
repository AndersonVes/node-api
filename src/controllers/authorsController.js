import authors from '../models/Author.js'

class AuthorController {

    static  listAuthors = (req, res) => {
        authors.find((err, authors) => {
            res.status(200).json(authors)
        })
    }

    static listAuthorById = (req, res) => {
        const id = req.params.id

        authors.findById(id, (err, authors) => {
            if(err) {
                res.status(400).send({message: `${err.message} - author id not found.`})
            } else {
                res.status(200).send(authors)
            }
        })
    }

    static createAuthor = (req, res) => {
        let author = new authors(req.body);

        author.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - failed to create author.`})
            } else {
                res.status(201).send(author.toJSON())
            }
        })
    }

    static updateAuthor = (req, res) => {
        const id = req.params.id;

        authors.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: "author updated"})
            } else {
                res.status(500).send({message: `${err.message} - failed to create author.`})
            }
        })
    }

    static deleteAuthor =(req, res) => {
        const id = req.params.id

        authors.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: "author removed"})
            } else {
                res.status(500).send({message: `${err.message} - failed to create author.`})
            }
        })
    }

}

export default AuthorController