// DB の connect 処理をモジュールにして読み込む
const db = require('./lib/db');

//db: connect()
const con = db.connect();

// select
let sql = 'UPDATE users SET ? WHERE ?;;'
let params = [
    { email: 'test@yokohama.com' },
    {id: 1 },
]

// UPDATE users SET email = 'xxxx' WHERE id = 'xx';
con.query(sql, params, (err, results) => {
    console.log(sql);
    console.log(results);
});

con.end();