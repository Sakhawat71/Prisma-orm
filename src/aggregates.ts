import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregateQuery = async () => {

    // avg count and sum
    const avgAge = await prisma.user.aggregate({
        _avg: {
            age: true
        },
        _count: {
            age: true
        },
        _sum: {
            age: true
        },
        _max: {
            age: true
        },
        _min: {
            age: true
        }
    });

    // find number of record
    const countData = await prisma.user.count();

    // aggregate with 
    const aggre = await prisma.post.aggregate({
        _count : {
            title : true
        },
        where : {
            published: true
        }
    })

    console.log(aggre);

};

aggregateQuery();