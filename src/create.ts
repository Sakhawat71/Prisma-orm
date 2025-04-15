import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();


const main = async () => {

    // create one
    const result = await prisma.post.create({
        data:{
            title : 'this is title',
            content : "this is content",
            author: 'Sakhawat'
        }
    });

    //create many
    const createMany = await prisma.post.createMany({
        data: [
            {
                title : 'hello world',
                content : "this is content about world",
                author: 'Showrav'
            },
            {
                title : 'how are you',
                content : "this is what i don't know",
                author: 'sabbir'
            },
            {
                title : 'this is title no one zero one',
                content : "this is content no zero",
                author: 'Sakhawat'
            },
        ]
    });

    // console.log("result ", result);
    console.log({createMany});
};

main();