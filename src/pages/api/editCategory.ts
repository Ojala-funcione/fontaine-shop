import { Category } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Category>
) {
  const {
    query: { id },
    body: { name, slug, image }
  } = req;
  const updatedCategory = await prisma.category.update({
    where: {
      id: id as string
    },
    data: {
      name,
      slug,
      image
    }
  });
  res.send(updatedCategory);
}
