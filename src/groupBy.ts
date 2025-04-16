import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const groupBy = async () => {
    //
    const group = await prisma.post.groupBy({
        by : ['published'],
        _count : {
            id : true
        },
        having: { // same as where
            published: true
        }
    });
    // console.log(group);

    // 
    const groupUser = await prisma.user.groupBy({
        by: 'age',
        having : {
            id: {
                _sum : {
                    gt : 1
                }
            } 
        }
    })
    console.log(groupUser);

};

groupBy();