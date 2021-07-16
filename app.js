const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
// A `main` function so that you can use async/await
async function main() {
    let user = await prisma.user.create({
        data: {
            email: 'bob@gmail.com',
            name: 'Bob Roberts',
        },
    })
    console.log(user)

    user = await prisma.user.create({
        data: {
            name: 'John',
            email: 'john@hotmail.com'
        },
    })

    console.log(user)
    user = await prisma.user.create({
        data: {
            name: 'Smith',
            email: 'smithy@gmail.com'
        },
    })
    console.log(user)

    user = await prisma.user.create({
        data: {
            name: 'Jeff',
            email: 'jeffrey@jeff.com'
        },
    })
    console.log(user)

    user = await prisma.user.findUnique({
        where: {
            email: 'jeffrey@jeff.com',
        },
    })
    console.log(user)
}
main()
    .catch(e => {
    throw e;
})
    .finally(async () => {
    await prisma.$disconnect();
});