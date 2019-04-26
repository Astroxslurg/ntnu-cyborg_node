# NTNU Cyborg Frontend

This is the frontend repository for NTNU Cyborg's promotation page.
The project is based on [Next.js](https://nextjs.org/ 'A Node-based React framework')

## Installing

To run this project you need to have Node (and Yarn) installed on your system.
Clone the project and cd into it.

Start by installing packages:

```
yarn
```

In order to be able to fetch the data from the backend-server, one needs to store the URL to the backend-server in an environment variable called BASE_URL. One can store all the environment variables needed in the .env file. On the production server this file looks like this:

```
BASE_URL=40.113.8.214:8080
NODE_ENV=production
```

Set BASE_URL=localhost:8080 if you are running the java-server locally.

To start a server in development mode, type:

```
yarn dev
```

To create a production build, type:

```
yarn next build
```

This will create a static build in .next/, which can be run with:

```
yarn start
```

## The Backend

[NTNU Cyborg Backend](https://github.com/HerSta/NTNU-cyborg_backend 'A Java/Spring-based backend repo')
