// const login = async ctx=>{
// }
// export default {
//     login
// }
import User from '../model/UserModel'
import md5 from 'md5';
import createToken from '../utils/createToken'

class UserController {
    async login(ctx){
        // 验证用户名密码是否合法
        ctx.body = '登录成功'
        let user = ctx.request.body.username;
        let password = ctx.request.body.password;
        // 对数据库的操作不在控制器中完成
        let doc = (await User.getUserByName(user))[0];
        if(doc){
            if(doc.password === md5(password)){
                // 生成 token
                let token = createToken(user);
                ctx.body = {
                    success:true,
                    message:'登陆成功',
                    token:token
                }
            }else{
                ctx.body = {
                    success:false,
                    message:'密码错误，请重新填写....',
                }
            }
        }else{
            ctx.body = {
                success:false,
                message:'用户名不存在，请重新输入用户名'
            }
        }
    }
    async logout(ctx){
        ctx.body = {
            success:true
        }
    }
}

export default new UserController()