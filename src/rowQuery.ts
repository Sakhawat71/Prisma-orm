import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const rowQuery = async () => {

    const posts = await prisma.$queryRaw`SELECT * FROM "posts"`;
    console.log(posts);

    // await prisma.$queryRaw `TRUNCATE TABLE "user1" CASCADE` // DELETE all data from table
};
rowQuery();