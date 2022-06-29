# Header Component

## Using my header Component
**npm install**
Change port in /src/app.js according to what port you are using for local host

## Connecting to Database
**psql postgres -f migration.sql**
###### To connect to the database create a .env file and specify your port and your connection string *PORT=num DATABASE_URL= 'postgresql://username:password@localhost:5432/database_name'*

## Seeding the Database
###### To seed the database go to /server/database/seed.js and run *node seed.js*. This will fill the database with 10 entities at a time so *node seed.js* will need to be ran accordingly.

## Running React App
###### In the root package.json file locate the start script and specify the port you want the the react app to run on and once you've made sure to check all ports are correct run your server and react app to observe the header component.