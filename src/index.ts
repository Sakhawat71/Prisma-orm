import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


const main = async () => {
    // const result = await prisma.post.create({
    //     data:{
    //         title : 'this is title',
    //         content : "this is content",
    //         author: 'Sakhawat'
    //     }
    // });

    // console.log("result ", result);

    const getAllFromDB = await prisma.post.findMany();

    const findFirst = await prisma.post.findFirst({
        where : {
            id : 2
        }
    })

};

main();