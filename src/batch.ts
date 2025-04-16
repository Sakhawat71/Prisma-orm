import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


const batchTransaction = async () => {

    const createUser = prisma.user.create({
        data: {
            userName: 'Admin',
            email: "admin1@mail.com",
            age: 36,
        }
    });
    // console.log(createUser);

    const updateUser = prisma.user.updateMany({
        where: {
            age : {
                gt : 34
            }
        },
        data: {
            role : 'admin'
        }
    });
    // console.log(updateUser);

    const [createData, updateData] = await prisma.$transaction([
        createUser,
        updateUser
    ]);

    console.log(createData,updateData);

};

// batchTransaction();
