# NTNU Cyborg Frontend

This is the frontend repository for NTNU Cyborg's promotation page.
The project is based on [Next.js](https://nextjs.org/ 'A Node-based React framework')

## Installing

To run this project you need to have [Node](https://nodejs.org) (and [Yarn](https://yarnpkg.com/en/docs/install)) installed on your system.

To install Node and Yarn on a Debian/Ubuntu system, become root and type:

```
apt-get install apt-transport-https
curl -sL https://deb.nodesource.com/setup_12.x | bash -
apt-get install -y nodejs
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
```

When Node and Yarn is installed, clone the project and cd into it.

To install the needed packages for the project, simply type:

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

The server will then run on port 3000.

Change the environemnt variable PORT to run it on a different port

## The Backend

[NTNU Cyborg Backend](https://github.com/HerSta/NTNU-cyborg_backend 'A Java/Spring-based backend repo')
