import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();

const update = async () => {

    // update
    // const singleUpdate = await prisma.post.update({
    //     where: {
    //         id: 2
    //     },
    //     data: {
    //         title: 'this is updated titel',
    //         content: 'updated content',
    //         author: 'Nobody'
    //     }
    // });


    // udpatemany
    // const updateMany = await prisma.post.updateMany({
    //     where: {
    //         published: false
    //     },
    //     data: {
    //         published: true
    //     }
    // });

    // UPSERT -> update or create
    // const upsertData = await prisma.post.upsert({
    //     where: {
    //         id: 9
    //     },
    //     update: {
    //         author: 'Mr z'
    //     },
    //     create: {
    //         title: 'hello mama',
    //         author: 'mr y',
    //         authorId: 101,
    //         content: 'one two'
    //     }
    // })

    // console.log(upsertData);

};

update();