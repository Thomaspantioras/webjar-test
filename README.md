# webjar-test

- Install nodeJs.

# Instal and Run Mongodb locally on Mac:
- Install mongo db.
- Create a director in `Users/<username>` named ‘data’ included another named ‘db’
- Open terminal and run:  `mongod --dbpath=/Users/<username>/data/db`

# server

Open a new terminal and direct to the `server` folder.

## setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm start
```

# client

Open a new terminal and direct to the `client` folder.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

App running at:
  http://localhost:8080/  


## Populate mongoDb documents
Use an app like MongoDB Compass Community to import initial json data from the folder `demoJsonData` to populate the database.