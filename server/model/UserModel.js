import query from '../utils/query'

class UserModel{
    async getUserByName(username){
        return await query(`select * from user where user='${username}'`)
    }
}

export default new UserModel()