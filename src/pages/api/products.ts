/* eslint-disable no-case-declarations */
import { Product } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../db";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Product[]>
// ) {
//   const products = await prisma.product.findMany();
//   res.status(200).json(products);
// }
export interface ICreateProduct {
  isOffer?: boolean;
  isNew?: boolean;
  isCombo?: boolean;
  isFeatured?: boolean;
  name: string;
  brand: string;
  description: string;
  category: string;
  price: number;
  salePrice: number;
  discountInPercent: number;
  stock: number;
  minStock: number;
  sku: string | null;
  image: string;
  gallery: Array<string>;
  variants?: boolean;
}
export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse<Product[] | null | Product>
) {
  const {
    query: { id },
    body: {
      onSale,
      isNew,
      onCombo,
      isFeatured,
      name,
      brand,
      description,
      category,
      price,
      discount,
      stock,
      minStock,
      sku,
      image,
      gallery,
      variants,
    },
    method,
  } = req;

  switch (method) {
    case "GET":
      if (id) {
        const product = await prisma.product.findUnique({
          where: { id: id as string },
        });
        res.status(200).json(product);
      }
      // eslint-disable-next-line no-case-declarations
      const products = await prisma.product.findMany();
      res.status(200).json(products);

      break;
    case "POST":
      const newProduct = await prisma.product.create({
        data: req.body,
      });
      res.status(200).json(newProduct);
      break;
    case "PUT":
      // Update or create data in your database
      res.status(200).json(null);
      break;
    case "DELETE":
      // es un put difrazado
      res.status(200).json(null);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
