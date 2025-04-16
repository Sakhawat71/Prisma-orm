import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const interactiveTransaction = async () => {

    const result = await prisma.$transaction(async (transactionClient) => {

        // query 1
        const getAllPost = await transactionClient.post.findMany({
            where: {
                published: true
            }
        });

        //query 2
        const countUser = await transactionClient.user.count();

        // query 3
        const updateUser = await transactionClient.user.update({
            where: {
                id: 2
            },
            data: {
                role: "user"
            }
        });

        return {
            countUser,
            updateUser,
            getAllPost
        }

    });

    console.log(result);
};
interactiveTransaction();