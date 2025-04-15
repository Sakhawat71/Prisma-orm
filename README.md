---

# 📘 Prisma ORM Guide

## 🔷 What is ORM?

**ORM** stands for **Object-Relational Mapping**. It's a technique that lets you interact with your database using your programming language (like JavaScript or TypeScript), instead of writing raw SQL queries.

---

## 🔷 What is Prisma?

**Prisma** is a modern, type-safe ORM for Node.js and TypeScript. It simplifies database access by generating a powerful client you can use to read/write data from your database.

### ✅ Key Features
- Type-safe queries
- Auto-completion in VS Code
- Easy migrations and schema modeling
- GUI via Prisma Studio
- Works with PostgreSQL, MySQL, SQLite, SQL Server, MongoDB (preview)

---

## 🛠️ Installation & Setup

### 1. **Install Prisma CLI**
```bash
npm install prisma --save-dev
npm install @prisma/client
```

### 2. **Initialize Prisma**
```bash
npx prisma init
```

> Creates the `prisma/schema.prisma` file and `.env`

---

## 📦 Project Structure

```bash
project-root/
├── prisma/
│   └── schema.prisma
├── .env
├── node_modules/
└── src/
    └── index.ts
```

---

## ✏️ Example Prisma Schema

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String
  author    String
  published Boolean @default(false)
}
```

---

## 🔁 Common Prisma Commands

| Command | Description |
|--------|-------------|
| `npx prisma init` | Initializes Prisma |
| `npx prisma migrate dev --name init` | Creates and runs a migration |
| `npx prisma generate` | Generates the Prisma Client |
| `npx prisma studio` | Opens Prisma Studio (GUI) |
| `npx prisma db push` | Pushes schema changes without a migration |
| `npx prisma format` | Formats the schema file |
| `npx prisma migrate reset` | Resets and re-applies all migrations |
| `npx prisma migrate deploy` | Applies all pending migrations (production) |

---

## ✅ Example Usage

### Connect with Prisma Client
```ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
```

---

### Create Many Records
```ts
const posts = await prisma.post.createMany({
  data: [
    { title: "Hello World", content: "About the world", author: "Showrav" },
    { title: "How are you", content: "No idea", author: "Sabbir" },
  ],
});
```

---

### Find One Post (by unique field)
```ts
const post = await prisma.post.findUniqueOrThrow({
  where: { id: 1 },
});
```

---

### Find First (by any condition)
```ts
const post = await prisma.post.findFirstOrThrow({
  where: { published: true },
  select: { title: true, author: true },
});
```

---

### Show All Posts
```ts
const allPosts = await prisma.post.findMany();
```

---

### Update a Post
```ts
const updated = await prisma.post.update({
  where: { id: 1 },
  data: { published: true },
});
```

---

### Delete a Post
```ts
await prisma.post.delete({
  where: { id: 1 },
});
```

---

## 🖥️ Prisma Studio

Start the Prisma GUI to view and edit DB records:

```bash
npx prisma studio
```

---

## 🌱 Seed Sample Data (Optional)

```ts
// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.post.createMany({
    data: Array.from({ length: 20 }, (_, i) => ({
      title: `Post ${i + 1}`,
      content: `Content for post ${i + 1}`,
      author: `Author ${i + 1}`,
    })),
  });
}

main().finally(() => prisma.$disconnect());
```

```bash
npx ts-node prisma/seed.ts
```

---

## 🧠 When to Use Prisma?

Use Prisma if you:
- Want type safety
- Want easy DB migrations
- Use TypeScript
- Prefer writing less SQL manually
- Need a GUI to explore data (Studio)

---
