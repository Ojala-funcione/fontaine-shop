/* eslint-disable linebreak-style */
import prisma from "../src/db/index";
import { productSeed, categoriesSeed } from "./data";

async function main() {
  await prisma.category.createMany({
    data: categoriesSeed,
  });
  await prisma.product.createMany({
    data: productSeed,
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
