import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
    // find all
    const getAllFromDB = await prisma.post.findMany();

    // find first
    const findFrist = await prisma.post.findFirst({
        where: {
            id: 10
        }
    });

    // find unique or thrw error
    const findUnique = await prisma.post.findUniqueOrThrow({
        where: {
            id: 1
        }
    })

    // console.log({findUnique});
};

main();