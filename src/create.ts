import { PrismaClient, userRole } from "@prisma/client";


const prisma = new PrismaClient();


const main = async () => {


    // create user
    // const createUser = await prisma.user.create({
    //     data : {
    //         userName : 'user1',
    //         email: 'user1@email.com',
    // role: userRole.user
    //     }
    // })
    // console.log(createUser);

    // create profile
    // const createProfile = await prisma.profile.create({
    //     data: {
    //         bio: 'this is bio for user1',
    //         userId: 1
    //     }
    // })
    // console.log(createProfile);

    // create categroy
    // const createCategroy = await prisma.category.create({
    //     data: {
    //         name: 'Technology'
    //     }
    // })
    // console.log(createCategroy);



    // create one with singel category
    // const createPost = await prisma.post.create({
    //     data: {
    //         title: 'this is title for Software engineering',
    //         content: "hello world, this is content for Software engineering",
    //         authorId: 1,
    //         postCategory: {
    //             create: {
    //                 categoryId: 2
    //                 // categroy: {
    //                 //     connect: {
    //                 //         id: 1
    //                 //     }
    //                 // }
    //             }
    //         }
    //     },
    //     include: {
    //         postCategory: true
    //     }
    // })
    // console.log(createPost);


    // create with many post categroy
    // const createPost = await prisma.post.create({
    //     data: {
    //         title: 'this is title for Software engineering and web dev',
    //         content: "hello world, this is content for Software engineering and web dev",
    //         authorId: 1,
    //         postCategory: {
    //             create:[
    //                 {
    //                     categoryId: 1
    //                 },
    //                 {
    //                     categoryId: 3
    //                 }
    //             ]
    //         }
    //     },
    //     include: {
    //         postCategory: true
    //     }
    // })


    // // Generate an array of 20 posts
    // const postsData = Array.from({ length: 20 }, (_, i) => ({
    //     title: `Post ${i + 1} Title`,
    //     content: `This is the content for post ${i + 1}.`,
    //     author: `Author ${i + 1}`
    // }));

    // //create many
    // const createMany = await prisma.post.createMany({
    //     data: postsData
    // });

    // console.log("result ", result);
    // console.log({ createMany });
};

main();