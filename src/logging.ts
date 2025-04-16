import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log : [
        {
            emit: "event",
            level: "query"
        }
    ]
});

prisma.$on("query",(e) => {
    console.log("event :",e);
})

const main = async () => {
    const logging = await prisma.post.findMany();
    // console.log(logging);
};

main();