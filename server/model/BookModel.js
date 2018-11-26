import query from '../utils/query'
import escape from '../utils/escape'

class BookModel{
    async getBook(){
        return await query(escape`select * from rd_list`)
    }
    async deleteBook(id){
        return await query(escape`delete from rd_list where id=${id}`)
    }
    async addBook({name,author,score}){
        return await query(escape`insert into rd_list set name=${name},author=${author},score=${score}`)
    }
    async editBook(id,{name,author,score}){
        return await query(escape`update rd_list set name=${name},author=${author},score=${score} where id=${id}`)
    }
}

export default new BookModel()