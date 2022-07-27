import { Category } from '@prisma/client';
import {
  AllCategoriesResponse,
  ICategory
} from '@Services/categories/categoriesInterfaces';
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../db';

export default async function categoryHandler(
  req: NextApiRequest,
  res: NextApiResponse<Category[] | null | Category | AllCategoriesResponse>
) {
  const {
    query: { id },
    method
  } = req;
  switch (method) {
    case 'POST':
      // eslint-disable-next-line no-case-declarations
      const newCategory = await prisma.category.create({
        data: req.body
      });
      res.json(newCategory);
      break;
    case 'GET':
      if (id) {
        const category = await prisma.category.findUnique({
          where: { id: id as string }
        });
        res.json(category);
      }
      // eslint-disable-next-line no-case-declarations
      const categorias = await prisma.category.findMany();
      res.status(200).json({
        categories: categorias as unknown as ICategory[],
        total: categorias.length
      });
      // res.json(categorias);

      break;
    default:
      break;
  }
}
