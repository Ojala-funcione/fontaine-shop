/* eslint-disable linebreak-style */
import { PrismaClient } from '@prisma/client';
import { productSeed, categoriesSeed } from './data';

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: productSeed
  });

  await prisma.category.createMany({
    data: categoriesSeed
  });
}

main()
  .catch((e) => {
    // console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
