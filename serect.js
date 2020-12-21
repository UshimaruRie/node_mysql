// DB の connect 処理をモジュールにして読み込む
const db = require('./lib/db');

//db: connect()
const con = db.connect();

// select
let sql = 'SELECT * FROM users;'
con.query(sql, (err, results) => {
    results.forEach((user) => {
        console.log(user.email);
    });
});

const user_id = 1;
sql ='SELECT * FROM users WHERE id = ' + user_id + ';';
con.query(sql, (err, results) => {
    console.log(sql);
    let user =results[0];
    if (user) console.log(user.email);
});

// //users から 10件取得
// const limit = 3;
// const offset = 0;
// let params = [limit, offset];
// let sql = 'SELECT * FROM users LIMIT ? OFFSET ?;';
// con.query(sql, params, (error, results, fields) => {
//     results.forEach((user, index) => {
//         console.log(`${user.id} : ${user.email}`);
//     })
// })

// //users から id で検索
// params = { 'id': 5 };
// sql = 'SELECT * FROM users WHERE ?;';
// con.query(sql, params, (error, results, fields) => {
//     if (results[0]) {
//         let user = results[0];
//         console.log(`${user.id} : ${user.name} : ${user.email}`);
//     } else {
//         console.log('Not found user.');
//     }
// })

//DB接続終了
con.end();