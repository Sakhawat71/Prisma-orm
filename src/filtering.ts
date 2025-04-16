import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const filteringQuery = async () => {

    // and filtering
    const andFiltering = await prisma.post.findMany({
        where: {
            AND: [
                {
                    title: {
                        contains: "title"
                    },
                },
                {
                    published: true
                }
            ]
        }
    });
    // console.log(andFiltering);

    // OR filtering
    const orFiltering = await prisma.post.findMany({
        where: {
            OR: [
                {
                    title: {
                        contains: "title"
                    },
                },
                {
                    published: true
                }
            ]
        }
    });
    // console.log(orFiltering);

    // not Operator
    const notFiltering = await prisma.post.findMany({
        where: {
            NOT: [
                {
                    title: {
                        contains: 'Software'
                    }
                }
            ]
        }
    });
    // console.log(notFiltering);

    // 
    const startWith = await prisma.user.findMany({
        where: {
            email: {
                startsWith: 'user2' //we can use -> endWith , contains, equals
            }
        }
    });
    // console.log(startWith);

    const inDepthData = await prisma.post.findUnique({
        where : {
            id :3
        },
        include: {
            postCategory : true
        }
    });
    // console.log(inDepthData);

};

filteringQuery();