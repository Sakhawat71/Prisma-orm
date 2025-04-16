import { PrismaClient, userRole } from "@prisma/client";


const prisma = new PrismaClient();


const main = async () => {


    // create user
    const createUser = await prisma.user.create({
        data: {
            userName: 'user3',
            email: 'user3@email.com',
            role: userRole.user
        }
    })
    console.log(createUser);

    // create profile
    const createProfile = await prisma.profile.create({
        data: {
            bio: 'this is bio for user3',
            userId: 3
        }
    })
    console.log(createProfile);

    // create categroy
    const createCategroy = await prisma.category.create({
        data: {
            name: 'Food'
        }
    })
    console.log(createCategroy);



    // create one with singel category
    const createPost = await prisma.post.create({
        data: {
            title: 'UCL night',
            content: "We're talking about champions League",
            authorId: 2,
            postCategory: {
                create: {
                    categoryId: 4
                    // categroy: {
                    //     connect: {
                    //         id: 1
                    //     }
                    // }
                }
            }
        },
        include: {
            postCategory: true
        }
    })
    console.log(createPost);


    // create with many post categroy
    const createPost2 = await prisma.post.create({
        data: {
            title: 'this is title for Software engineering and web dev',
            content: "hello world, this is content for Software engineering and web dev",
            authorId: 1,
            postCategory: {
                create:[
                    {
                        categoryId: 1
                    },
                    {
                        categoryId: 3
                    }
                ]
            }
        },
        include: {
            postCategory: true
        }
    })


    

    //create many
    const createMany = await prisma.post.createMany({
        data: []
    });

    console.log({ createMany });
};

// main();