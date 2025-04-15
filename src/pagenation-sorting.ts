import { PrismaClient } from "../generated/prisma";


const prisma = new PrismaClient();

const pagenateSorting = async() => {

    // offset pagination
    const offsetData = await prisma.post.findMany({
        skip: 0,
        take: 5
    });


    // cursor based pagination
    const cursorData = await prisma.post.findMany({
        skip: 5,
        take: 3,
        cursor: {
            id: 10
        }
    });


    // sorting
    const sortedData = await prisma.post.findMany({
        orderBy: {
            id: 'asc'
        }
    });

    console.log("pagenation ",sortedData);
};

pagenateSorting();