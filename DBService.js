var pg = require('pg');
const async = require('async');
const fs = require('fs');
const { callbackify } = require('util');
const { rows } = require('pg/lib/defaults');

const config = {
    host: 'us-west-2.bdb19774-f020-49d8-a5c9-db38bbe89f22.aws.ybdb.io',
    port: '5433',
    database: 'kbase',
    user: 'admin',
    password: 'ivBlszGOo76Q2SPpUB4r58PMB1fxQT',
    // Uncomment and initialize the SSL settings for YugabyteDB Managed and other secured types of deployment
    ssl: {
        rejectUnauthorized: true,
        ca: fs.readFileSync('/workspaces/car-dealership/root.crt').toString()
    },
    connectionTimeoutMillis: 30000
};

var client;

async function connect(callbackHadler) {
    console.log('>>>> Connecting to YugabyteDB!');

    try {
        client = new pg.Client(config);

        await client.connect();

        console.log('>>>> Connected to YugabyteDB!');

        callbackHadler();
    } catch (err) {
        callbackHadler(err);
    }
}



class DBService{
    static getDbServiceInstance(){
        return instance ? instance : new DbService();
    }

}
async.series([
    function (callbackHadler) {
        connect(callbackHadler);
    },
    function(err)
    {
        if(err)
        {
            console.log(err)
        }
    }])
module.exports =DBService;