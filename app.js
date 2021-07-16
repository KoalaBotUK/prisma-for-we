const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
// A `main` function so that you can use async/await
async function createUser(email, name){
  const user = await prisma.user.create({
    data: {
      email: email,
      name: name,
    },
    
  });
  console.log(user);
}
async function findUser(email){
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  })
  console.log(user);
}

async function main() {
  let addedEmail = "ex1@example.com";
  let addedName = "ex";
  let searchEmail = "ex@example.com";

    // ... you will write your Prisma Client queries here
    createUser(addedEmail, addedName);
    findUser(searchEmail);
    const users = await prisma.user.findMany()
    console.log(users)
}
main()
    .catch(e => {
    throw e;
})
    .finally(async () => {
    await prisma.$disconnect();
});