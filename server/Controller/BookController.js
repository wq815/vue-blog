import BookModel from '../model/BookModel'

class BookController{
    async getBook(ctx){
        ctx.body = await BookModel.getBook();
    }
    async deleteBook(ctx){
        const id = ctx.params.id
        ctx.body = await BookModel.deleteBook(id)
    }
    async addBook(ctx){
        ctx.body = await BookModel.addBook(ctx.request.body)
    }
    async editBook(ctx){
        ctx.body = await BookModel.editBook(ctx.params.id,ctx.request.body)
    }
}

export default new BookController()