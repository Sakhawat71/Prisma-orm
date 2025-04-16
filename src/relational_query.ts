import { Post } from './../generated/prisma/index.d';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async () => {
    // fluent api
    const findUser = await prisma.user.findUniqueOrThrow({
        where: {
            id: 1
        }
    }).Post()
    // console.log(findUser);

    // Relational filters
    const relationalFilters = await prisma.user.findMany({
        include : {
            Post : {
                where : {
                    published: true
                }
            }
        }
    });
    // console.dir(relationalFilters,{depth : Infinity});

};

relationalQueries();