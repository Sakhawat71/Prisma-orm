import { PrismaClient } from "../generated/prisma";


const prisma = new PrismaClient();

const deleteQeury = async () => {

    // delete
    const singleDelete = await prisma.post.delete({
        where: {
            id: 4
        }
    });

    // delete many
    const deleteMany = await prisma.post.deleteMany({
        where: {
            title: 'this is title'
        }
    })


    console.log({deleteMany});

};

deleteQeury();