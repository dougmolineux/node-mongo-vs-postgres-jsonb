# node-mongo-vs-postgres-jsonb
Measure the performance of Postgres (pg npm module) JSONB and compare with MongoDB. Utilizes the Node.js [Performance Timing API](https://nodejs.org/api/perf_hooks.html#perf_hooks_performance_timing_api). Sets up databases locally via docker-compose.

# Questions
- How long does it take to insert example users into a PostgreSQL table with a jsonb type?
```
Process took 1826.988435ms to insert 1000 users.
Process took 1978.387733ms to insert 1000 users.
Process took 2247.104164ms to insert 1000 users.
Average of 2017.493444ms
```
It appears to take slightly over 2 seconds to insert 1,000 example users into a PostgreSQL table with a jsonb type.
```
Process took 22231.178083ms to insert 10000 users.
Process took 21905.016349ms to insert 10000 users.
Process took 22108.081911ms to insert 10000 users.
Average of 22081.425447666666667
```
Around 22 seconds to insert 1,000 example users into a PostgreSQL table with a jsonb type.

- How long does it take to insert example users into a MongoDB collection?
```
Process took 1413.175114ms to insert 1000 users.
Process took 1340.22536ms to insert 1000 users.
Process took 1685.255973ms to insert 1000 users.
Average of 1479.552149ms
```
Less than 1.5 seconds to insert 1000 users into MongoDB collection.
```
Process took 12030.023003ms to insert 10000 users.
Process took 12473.402613ms to insert 10000 users.
Process took 12609.618173ms to insert 10000 users.
Average of 12371.014596333333333ms
```
Around 12.3 seconds to insert 10000 users into MongoDB collection.

![](assets/insertUser.png?raw=true)

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
