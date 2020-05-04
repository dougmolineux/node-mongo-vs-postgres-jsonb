const { Pool, Client } = require('pg');
const { PerformanceObserver, performance } = require('perf_hooks');

// number of example users to insert into temp db
const userCount = 10000;

const obs = new PerformanceObserver((items) => {
  console.log(`Process took ${items.getEntries()[0].duration}ms to insert ${userCount} users.`);
  performance.clearMarks();
});

obs.observe({ entryTypes: ['measure'] });

const client = new Client({
  user: "postgres"
});

async function init() {
  console.log('Starting...');
  await client.connect();
  const tableRes = await createTable();

  let n = 0
  performance.mark('A');
  while(n < userCount) {
    await insertUser();
    n++;
  }
  performance.mark('B');
  performance.measure('A to B', 'A', 'B');
}

init();

async function createTable() {
  const createTableText = `
  CREATE EXTENSION IF NOT EXISTS "pgcrypto";
  CREATE TEMP TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    data JSONB
  );`;
  // create our temp table
  return await client.query(createTableText);
}

async function insertUser() {
  const userArr = [{
    age: 'javascript',
    email: 'likes',
    location: 'semicolons'
  }];
  // create a new user
  return await client.query('INSERT INTO users(data) VALUES($1)', userArr);
}

async function getUsers() {
  return await client.query('SELECT * FROM users');
}
