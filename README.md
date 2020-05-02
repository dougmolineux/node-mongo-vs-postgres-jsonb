# node-mongo-vs-postgres-jsonb
Measure the performance of Postgres (pg npm module) JSONB and compare with MongoDB. Utilizes the Node.js [Performance Timing API](https://nodejs.org/api/perf_hooks.html#perf_hooks_performance_timing_api). Sets up databases locally via docker-compose.

# Questions
- How long does it take to insert 1,000 example users into a PostgreSQL table with a jsonb type?
```
Process took 1826.988435ms to insert 1000 users.
Process took 1978.387733ms to insert 1000 users.
Process took 2247.104164ms to insert 1000 users.
Average of 2017.493444ms
```
It appears to take around 2 seconds to insert example users into a PostgreSQL table with a jsonb type.

- How long does it take to insert 1,000 example users into a MongoDB collection?
- Does PostgreSQL insert 1,000 example users faster than MongoDB?
- How long does it take to get these 1,000 users back from PostgreSQL table?
- How long does it take to get just the user.name from PostgreSQL table?
- How long does it take to get these 1,000 users back from MongoDB collection?
- How long does it take to get just the user.name from MongoDB collection?
- Does a PostgreSQL TEMP table speed up performance?
- How much does Mongoose affect MongoDB performance?

# Versions
Tested using Node v14.0.0
pg v8.0.3

# Start Databases
`docker-compose up -d`

# Dependencies
[Docker Compose](https://docs.docker.com/compose/)
