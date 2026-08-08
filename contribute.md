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



## Docker Compose Installation