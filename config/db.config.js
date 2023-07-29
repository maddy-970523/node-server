const mysql = require("mysql")

// 2. 创建连接配置
const db = mysql.createConnection({
    host:'http://49.235.113.195/',
    user:'root',
    password:'Dcc22fMHE83pZzTC',
    database:'blogServer'
})
// 向外共享db数据库连接对象
module.exports = db