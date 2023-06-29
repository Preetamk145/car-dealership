// var pg = require('pg');
// const async = require('async');
// const fs = require('fs');
// const { callbackify } = require('util');
// const { rows } = require('pg/lib/defaults');

// let instance=null;

// const config = {
//     host: 'us-west-2.bdb19774-f020-49d8-a5c9-db38bbe89f22.aws.ybdb.io',
//     port: '5432',
//     database: 'kbase',
//     user: 'admin',
//     password: 'ivBlszGOo76Q2SPpUB4r58PMB1fxQT',
//     // Uncomment and initialize the SSL settings for YugabyteDB Managed and other secured types of deployment
//     ssl: {
//         rejectUnauthorized: true,
//         ca: fs.readFileSync('/workspaces/car-dealership/root.crt').toString()
//     },
//     connectionTimeoutMillis: 30000
// };

// var client;

// async function connect() {
//     console.log('>>>> Connecting to YugabyteDB!');

//     try {
//         client = new pg.Client(config);

//         await client.connect();

//         console.log('>>>> Connected to YugabyteDB!');

        
//     } catch (err) {
//         console.error(err)
//     }
// }

// connect()

// class DBService{
//     static getDbServiceInstance(){
//         return instance ? instance : new DbService();
//     }
    
    // async useradd(name,email,adhno,license_no,address,imgname){
    //     try{
    //         const res= await client.query('insert into customer (name,email,adhno,license_no,address,imgname)values(\''+name+'\',\''+email+'\','+adhno+','+license_no+',\''+address+'\',\''+imgname+'\');')
    //     }
    //     catch(err)
    //     {
    //         console.error(err);
    //     }
    // }

//     async userreturn(email){
//         try{
//             const res= await client.query('select * from customer where email =\''+email+'\';')
//         }
//         catch(err)
//         {
//             console.error(err);
//         }
//         return res;
//     }

// }
// // async.series([
// //     function (callbackHadler) {
// //         connect(callbackHadler);
// //     },
// //     function(err)
// //     {
// //         if(err)
// //         {
// //             console.log(err)
// //         }
// //     }])
// module.exports =DBService;


const mysql=require('mysql');

let instance=null;

const connection =mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'kbase',
    port:'3306'
});

connection.connect((err) => {
if(err)
{
    console.error(err);
}
console.log('db'+connection.state);
});

class DbService{
    static getDbServiceInstance(){
        return instance ? instance : new DbService();
    }
    async useradd(name,email,adhno,license_no,address,imgname){
        try{
            await new Promise((resolve, reject) => {

                connection.query('insert into customer (name,email,adhno,license_no,address,imgname)values(\''+name+'\',\''+email+'\','+adhno+','+license_no+',\''+address+'\',\''+imgname+'\');' , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result);
                })
            });
            return;
        }
        catch(err)
        {
            console.error(err);
        }
    }
    async userreturn(email){
        try{
            await new Promise((resolve, reject) => {

                connection.query('select * from customer where email =\''+email+'\';' , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result);
                })
            });
            return result;
        }
        catch(err)
        {
            console.error(err);
        }
        
       }

}
module.exports =DbService;