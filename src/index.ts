import { PrismaClient } from "../generated/prisma";

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
    console.log(getAllFromDB);
};

main();