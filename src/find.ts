import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const main = async () => {
    // find all
    const getAllFromDB = await prisma.post.findMany();

    // find first
    // const findFrist = await prisma.post.findFirst({
    //     where: {
    //         id: 10
    //     }
    // });

    // find unique or thrw error
    // const findUnique = await prisma.post.findUniqueOrThrow({
    //     where: {
    //         id: 1
    //     }
    // })

    // select
    const findWithSelect = await prisma.post.findFirst({
        where: {
            published: false
        },
        select: {
            title: true,
            author: true,
        }
    })

    console.log({ findWithSelect });
};

main();