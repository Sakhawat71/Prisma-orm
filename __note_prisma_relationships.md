---

# 🔗 Prisma Relationships Guide

## 📘 Introduction

Prisma makes defining relationships between models easy using `@relation`. Below are examples for:

- ✅ One-to-One
- ✅ One-to-Many
- ✅ Many-to-Many

---

## 1️⃣ One-to-One Relationship

### Example: **User ↔ Profile**

```prisma
model User {
  id       Int     @id @default(autoincrement())
  email    String  @unique
  profile  Profile?
}

model Profile {
  id      Int    @id @default(autoincrement())
  bio     String
  userId  Int    @unique
  user    User   @relation(fields: [userId], references: [id])
}
```

### 🔎 Explanation:
- `User` has **one** `Profile`
- `Profile` belongs to **one** `User`
- `userId` is marked `@unique` to enforce 1:1

---

## 2️⃣ One-to-Many Relationship

### Example: **User → Post(s)**

```prisma
model User {
  id    Int    @id @default(autoincrement())
  name  String
  posts Post[]  // One user has many posts
}

model Post {
  id      Int   @id @default(autoincrement())
  title   String
  userId  Int
  user    User  @relation(fields: [userId], references: [id])
}
```

### 🔎 Explanation:
- A `User` can have many `Posts`
- Each `Post` belongs to **one** `User`

---

## 3️⃣ Many-to-Many Relationship

### Example: **Student ↔ Course**

```prisma
model Student {
  id       Int       @id @default(autoincrement())
  name     String
  courses  Course[]  @relation("Enrollments")
}

model Course {
  id       Int       @id @default(autoincrement())
  title    String
  students Student[] @relation("Enrollments")
}
```

> Prisma automatically creates a join table behind the scenes.

### Optional: Custom Join Table (Explicit)

```prisma
model Student {
  id         Int           @id @default(autoincrement())
  name       String
  enrollments Enrollment[]
}

model Course {
  id         Int           @id @default(autoincrement())
  title      String
  enrollments Enrollment[]
}

model Enrollment {
  student   Student @relation(fields: [studentId], references: [id])
  studentId Int

  course    Course  @relation(fields: [courseId], references: [id])
  courseId  Int

  @@id([studentId, courseId]) // composite primary key
}
```

---

## 🧪 Example Queries

### Fetch user with profile (1:1)
```ts
const user = await prisma.user.findUnique({
  where: { id: 1 },
  include: { profile: true }
});
```

---

### Fetch user with posts (1:N)
```ts
const user = await prisma.user.findUnique({
  where: { id: 1 },
  include: { posts: true }
});
```

---

### Fetch student with courses (N:M)
```ts
const student = await prisma.student.findUnique({
  where: { id: 1 },
  include: { courses: true }
});
```

---
