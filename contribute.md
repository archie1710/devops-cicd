# Contributing

## Manual Installation

* Install Node.js locally
* Clone the repository
* Install dependencies

  * `npm install`
* Start the database locally

  * `docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres`
  * **OR** go to [Neon](https://neon.tech/) and create a new database
* Go to the `.env` file and update your database credentials
* Run Prisma migrations

  * `npx prisma migrate dev`
* Generate Prisma Client

  * `npx prisma generate`
* Build the project

  * `npm run build`
* Start the project

  * `npm run start`

## Docker Installation

* Install Docker
* Create a Docker network

  * `docker network create user-project`
* Start PostgreSQL

  * `docker run --network user-project --name postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres`
* Build the Docker image

  * `docker build --network=host -t user-project .`
* Run the Docker container

  * `docker run -e DATABASE_URL="postgres://postgres:mysecretpassword@postgres:5432/postgres?schema=public" --network user-project -p 3000:3000 user-project`

## Docker Compose Installation


