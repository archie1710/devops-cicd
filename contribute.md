## Manual Installation
-Install node locally
-Clone the repo
-Install dependencies(npm i)
-Start the DB locally
    -docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
    -(OR) go to neon.tech and get yourself a new DB 
-Go to .env file and update your DB credentials
-npx prisma migrate dev
-npx prisma generate
-npm run build
-npm run start


## Docker Installation
-Install Docker
-Create Network
    -docker network create user-project
-Start Postgres
    -docker run --network user-project --name postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
-Build image `docker build --network=host -t user-project .`
-Run image `docker run -e DATABASE_URL="postgres://postgres:mysecretpassword@postgres:5432/postgres?schema=public" --network user-project -p 3000:3000 user-project`


## Docker Compose Installation