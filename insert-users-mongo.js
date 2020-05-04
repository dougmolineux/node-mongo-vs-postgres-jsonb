const MongoClient = require('mongodb').MongoClient;
const { PerformanceObserver, performance } = require('perf_hooks');

// number of example users to insert into temp db
const userCount = 10000;

const obs = new PerformanceObserver((items) => {
  console.log(`Process took ${items.getEntries()[0].duration}ms to insert ${userCount} users.`);
  performance.clearMarks();
});

obs.observe({ entryTypes: ['measure'] });

const url = 'mongodb://localhost:27017';
const dbName = 'perf';

// Use connect method to connect to the server
MongoClient.connect(url, {
  useUnifiedTopology: true
}, async (err, client) => {
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  try {
    let n = 0;
    performance.mark('A');
    while(n < userCount) {
      await insertDoc(db);
      n++;
    }
    performance.mark('B');
    performance.measure('A to B', 'A', 'B');
  } catch(e) {
    console.error(e);
  }
  console.log("Closing Client");

  client.close();
});

function insertDoc(db) {
  return new Promise( (res, rej) => {
    // Get the documents collection
    const collection = db.collection('users');
    // Insert some documents
    collection.insertOne({
        age: 'javascript',
        email: 'likes',
        location: 'semicolons'
      }, (err, result) => {

        // console.log(result.result);

        if(err) {
          return rej(err);
        }

        return res(result);
    });

  });
}
