# Next.js OpenJira App
To run locally, the database is needed.
```
docker-compose up -d
```

* The -d means __detached__

MongoDB Local URL:

```
mongodb://localhost:27017/entriesdb
```

## Setting enviroment variables
Rename the file __.env.template__ to __.env__

## Filling the database with test data
Call:
```
http://localhost:3000/api/seed
```