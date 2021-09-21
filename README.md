# rm-AirBnb

Powered by
[[ReactJs]](https://reactjs.org/) [![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

Plan maker is a Plan management system where user can CRUDE their plans. Admin can manage both users and plans. Manager can only manage Users.

### Pre-requisites to run the project

-   Typescript
-   Node
-   Docker
-   Docker-compose
-   yarn
-   ports: **3000** & **27017**

### Things to do to run the project in docker

-   Change the **Connection String** in **server.ts** from **localhost:27017** to **mongo:27017**

### Tech

PlanMaker uses a number of open source projects to work properly:

-   Nodejs - Server Side language
-   ReactJs - SPA!
-   Tyescript - Type casting
-   Redux - State Management Package
-   ReduxThunk
-   Material UI - Layout of the Components
-   Styled Components - design the components
-   Docker
-   Docker-compose
-   yarn

### Features Added

-   Login and Registration for Users
-   Crude own plans for users
-   Crude Users by Manager
-   Crude Plans and Users by Admin

### Features can be Added in future

-   Image for plans
-   Detail of the plan such as: type of plan, image etc

### Installation for Development

-   configure ports in client/config.js and /docker-compose.yml file according to pc configuration

To run the project in development mood, run the following commands

To Start the server, run

```sh
$ yarn or npm install
$ yarn server or npm run server
```

for Front End,

```sh
$ cd client
$ yarn  or npm install
$ cd .. && yarn client or npm run client
```

### Installation for prod

-   configure ports in client/config.js and /docker-compose.yml file according to pc configuration

To run the project in built mood, run the following commands

```sh
$ yarn dev
```

Or for npm,

```sh
$ npm run dev
```

### For Docker

-   Change the **Connection String** in **server.ts** from **localhost:27017** to **mongo:27017**

To run the project in docker, run the following commands

```sh
$ docker-compose build && docker-compose up -d
```
