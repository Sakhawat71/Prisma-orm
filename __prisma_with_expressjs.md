
---

## 🔗 Prisma + Express.js Integration

### 📁 Project Structure

```
project/
├── node_modules/
├── prisma/
│   └── schema.prisma
├── src/
│   ├── app.ts
│   ├── server.ts
│   └── routes/
│       └── post.route.ts
├── .env
├── package.json
└── tsconfig.json (if using TypeScript)
```

---

## 1️⃣ Install Dependencies

```bash
npm install express @prisma/client
npm install -D prisma
```

Initialize Prisma:

```bash
npx prisma init
```

---

## 2️⃣ Set up `.env`

```env
DATABASE_URL="postgresql://username:password@localhost:5432/your_db"
```

---

## 3️⃣ Define Prisma Schema (`prisma/schema.prisma`)

```prisma
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
  published Boolean @default(false)
}
```

---

## 4️⃣ Create Migration & Generate Client

```bash
npx prisma migrate dev --name init
```

---

## 5️⃣ Create Express App with Prisma (`src/app.ts`)

```ts
// src/app.ts
import express from 'express';
import postRoutes from './routes/post.route';

const app = express();

app.use(express.json());
app.use('/api/posts', postRoutes);

export default app;
```

---

## 6️⃣ Start the Server (`src/server.ts`)

```ts
// src/server.ts
import app from './app';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

---

## 7️⃣ Setup Route with Prisma (`src/routes/post.route.ts`)

```ts
// src/routes/post.route.ts
import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

// GET all posts
router.get('/', async (req, res) => {
  const posts = await prisma.post.findMany();
  res.json(posts);
});

// CREATE post
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  const newPost = await prisma.post.create({
    data: {
      title,
      content,
      published: false,
    },
  });
  res.status(201).json(newPost);
});

// GET post by ID
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const post = await prisma.post.findUnique({ where: { id } });
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json(post);
});

// DELETE post
router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id);
  await prisma.post.delete({ where: { id } });
  res.json({ message: 'Post deleted' });
});

export default router;
```

---

## 🔁 Optional: TypeScript Config

```bash
npm install -D typescript ts-node @types/node @types/express
npx tsc --init
```

---

## 🧪 Test it

Start the app:
```bash
npx ts-node src/server.ts
```

Use Postman or `curl` to test:

- `GET http://localhost:5000/api/posts`
- `POST http://localhost:5000/api/posts` (with JSON body)
- `GET http://localhost:5000/api/posts/1`
- `DELETE http://localhost:5000/api/posts/1`

---

## ✅ Summary

| Task | Command |
|------|---------|
| Install Prisma | `npm install prisma @prisma/client` |
| Init Prisma | `npx prisma init` |
| Create Migration | `npx prisma migrate dev --name init` |
| Generate Client | `npx prisma generate` |
| Start App | `npx ts-node src/server.ts` |

---
