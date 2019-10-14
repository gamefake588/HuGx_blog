// 数据库连接
const mysql = require("mysql")

// 创建连接
const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    port: "3306",
    database: "hugx_blog",
    charset: 'UTF8', //数据库编码
    timezone: "08:00", // 配置数据库时间格式
})

let query = function(sql, callback) {
    connection.getConnection(function(err, conn) {
        if (err) {
            callback(err, null, null);
        } else {
            conn.query(sql, function(qerr, vals, fields) {
                //释放连接  
                conn.release();
                //事件驱动回调  
                callback(qerr, vals, fields);
            });
        }
    });
};

// function Get_db() {
//     //创建一个conn连接
//     connection.connect(function(err) {
//         if (err) {
//             console.log('数据库err:', err);
//             setTimeout("Get_db()", 2000)
//         }
//         console.log("数据库连接成功")
//     });

//     // 捕获异常
//     connection.on('error', function(err) {
//         console.log(err)
//         console.log(err.code)
//         if (err.code === 'PROTOCOL_CONNECTION_LOST') {
//             Get_db()
//         } else {
//             Get_db()
//             console.log(err)
//         }
//     });

// }
// Get_db()

module.exports = query