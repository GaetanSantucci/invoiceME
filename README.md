This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Prisma

Step to install and initialize prisma

`npm i -D prisma`
`npm i @c=prisma/client`

`npx prisma init`

In the .env file, set DATABASE_URL for db connection

`npx prisma db pull`
`npx prisma generate`

Create schema.prisma file to connect database and create schema for differents tables:

```
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Customer {
  id       Int    @id @default(autoincrement())
  username String
  email    String
}
```

And in API routes:

```
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
```

After, we can seed and create migration plan using:

`npx prisma migrate dev --name init` that will generate a prisma folder with schema.prisma file with all schema inside

## Deploy on Docker

