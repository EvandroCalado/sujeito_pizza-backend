import prismaClient from '../../prisma';

interface ProductRequest {
  category_id: string;
}

export default {
  async execute({ category_id }: ProductRequest) {
    const category = await prismaClient.category.findFirst({
      where: {
        id: category_id,
      },
    });

    if (!category) {
      throw new Error('Category id incorrect');
    }

    const productsByCategory = await prismaClient.product.findMany({
      where: {
        category_id,
      },
    });

    return productsByCategory;
  },
};
