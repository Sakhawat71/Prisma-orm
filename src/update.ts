import { PrismaClient } from "../generated/prisma";


const prisma = new PrismaClient();

const update = async () => {

    // update
    const singleUpdate = await prisma.post.update({
        where: {
            id: 2
        },
        data: {
            title: 'this is updated titel',
            content: 'updated content',
            author: 'Nobody'
        }
    });


    // udpatemany
    const updateMany = await prisma.post.updateMany({
        where: {
            published: false
        },
        data: {
            published: true
        }
    });



    console.log(update);

};

update();