import { Post } from './../generated/prisma/index.d';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async () => {
    const findUser = await prisma.user.findUniqueOrThrow({
        where: {
            id: 1
        }
    }).Post()
    console.log(findUser);
};

relationalQueries();